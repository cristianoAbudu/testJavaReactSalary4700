const API_URL = 'http://localhost:8080/api/pedidos';

export async function listOrders() {
    const r = await fetch(API_URL);
    if (!r.ok) throw new Error('Não foi possível carregar os pedidos');
    return r.json()
}

export async function createOrder(order) {
    const r = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    });
    if (!r.ok) throw new Error('Não foi possível criar o pedido');
    return r.json()
}
