export default function OrderList({orders}) {
    return <section>
        <h2>Pedidos</h2>
        {orders.length === 0 ? <p>Nenhum pedido encontrado.</p> :
        <ul>
            {orders.map(o =>
                <li key={o.id}>#{o.id} — {o.customerName} — R$ {o.total} — {o.observation} </li>
            )}
        </ul>}</section>
}
