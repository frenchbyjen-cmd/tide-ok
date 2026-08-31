import { readAll, writeAll } from "./_store.mjs";
const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
});
export default async (request) => {
  try {
    const method = request.method;
    let orders = await readAll("tide-table-orders");
    if (method === "GET") return jsonResponse({ orders });
    if (method === "POST") {
      const payload = await request.json();
      if (!payload.id || !payload.table || !Array.isArray(payload.items)) return jsonResponse({ error: "Invalid order" }, 400);
      orders.push(payload); await writeAll("tide-table-orders", orders);
      return jsonResponse({ ok: true, order: payload }, 201);
    }
    if (method === "PUT") {
      const { id, status } = await request.json();
      const index = orders.findIndex(o => o.id === id);
      if (index < 0) return jsonResponse({ error: "Order not found" }, 404);
      orders[index] = { ...orders[index], status, updatedAt: new Date().toISOString() };
      await writeAll("tide-table-orders", orders);
      return jsonResponse({ ok: true, order: orders[index] });
    }
    if (method === "DELETE") { await writeAll("tide-table-orders", []); return jsonResponse({ ok: true }); }
    return jsonResponse({ error: "Method not allowed" }, 405);
  } catch (error) {
    console.error(error); return jsonResponse({ error: error?.message || "Server error" }, 500);
  }
};
