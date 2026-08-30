import { store } from "./_store.mjs";

export default async () => {
  const siteID =
    process.env.NETLIFY_SITE_ID ||
    process.env.SITE_ID;

  const token =
    process.env.NETLIFY_BLOBS_TOKEN ||
    process.env.NETLIFY_AUTH_TOKEN;

  try {
    const testStore = store("health-check");

    await testStore.setJSON("test", {
      ok: true,
      time: new Date().toISOString(),
    });

    const result = await testStore.get("test", {
      type: "json",
    });

    return new Response(
      JSON.stringify(
        {
          ok: true,
          message: "Netlify Blobs connected",
          environment: {
            siteIDPresent: Boolean(siteID),
            tokenPresent: Boolean(token),
            siteName: process.env.SITE_NAME || null,
            url: process.env.URL || null,
          },
          blobsWorking: Boolean(result),
        },
        null,
        2
      ),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify(
        {
          ok: false,
          message: "Netlify Blobs connection failed",
          environment: {
            siteIDPresent: Boolean(siteID),
            tokenPresent: Boolean(token),
            siteName: process.env.SITE_NAME || null,
            url: process.env.URL || null,
          },
          error: String(error?.message || error),
        },
        null,
        2
      ),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
};
