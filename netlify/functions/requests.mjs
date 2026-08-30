import { readAll, writeAll } from "./_store.mjs";

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export default async (request) => {
  try {
    const method = request.method;
    let requests = await readAll("tide-table-requests");

    if (method === "GET") {
      return jsonResponse({ requests });
    }

    if (method === "POST") {
      const payload = await request.json();

      if (
        !payload.id ||
        !payload.table ||
        !payload.kind
      ) {
        return jsonResponse(
          { error: "Invalid request" },
          400
        );
      }

      requests.push(payload);

      await writeAll(
        "tide-table-requests",
        requests
      );

      return jsonResponse(
        {
          ok: true,
          request: payload,
        },
        201
      );
    }

    if (method === "PUT") {
      const { id, status } =
        await request.json();

      const index = requests.findIndex(
        (item) => item.id === id
      );

      if (index < 0) {
        return jsonResponse(
          { error: "Request not found" },
          404
        );
      }

      requests[index] = {
        ...requests[index],
        status,
        updatedAt: new Date().toISOString(),
      };

      await writeAll(
        "tide-table-requests",
        requests
      );

      return jsonResponse({
        ok: true,
        request: requests[index],
      });
    }

    if (method === "DELETE") {
      await writeAll(
        "tide-table-requests",
        []
      );

      return jsonResponse({
        ok: true,
      });
    }

    return jsonResponse(
      { error: "Method not allowed" },
      405
    );
  } catch (error) {
    console.error(error);

    return jsonResponse(
      {
        error:
          error?.message ||
          "Server error",
      },
      500
    );
  }
};
