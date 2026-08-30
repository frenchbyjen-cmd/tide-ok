import { getStore } from "@netlify/blobs";

function credentials() {
  const siteID =
    process.env.NETLIFY_SITE_ID ||
    process.env.SITE_ID;

  const token =
    process.env.NETLIFY_BLOBS_TOKEN ||
    process.env.NETLIFY_AUTH_TOKEN;

  if (!siteID) {
    throw new Error("Missing Netlify Site ID");
  }

  if (!token) {
    throw new Error("Missing Netlify token");
  }

  return { siteID, token };
}

export function store(name) {
  const { siteID, token } = credentials();

  return getStore({
    name,
    siteID,
    token,
    consistency: "strong",
  });
}

export async function readAll(name) {
  const s = store(name);

  try {
    const data = await s.get("data", { type: "json" });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

export async function writeAll(name, data) {
  const s = store(name);

  await s.setJSON("data", data);
  return data;
}
