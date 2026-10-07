import {useState} from 'react';
import {createOrder} from '../services/orderApi';

export default function OrderForm({onCreated}) {
    const [customerName, setCustomerName] = useState('');
    const [total, setTotal] = useState('');
    const [observation, setObservation] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        const created = await createOrder({customerName, total: Number(total), observation});
        setCustomerName('');
        setTotal('');
        setObservation('');
        onCreated(created)
    }

    return <form onSubmit={handleSubmit}><h2>Novo pedido</h2>
        <input
            aria-label="Cliente"
            placeholder="Cliente"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
        />
        <input
            aria-label="Total"
            placeholder="Total"
            type="number"
            step="0.01"
            value={total}
            onChange={e => setTotal(e.target.value)}
        />
        <input
            aria-label="Observacao"
            placeholder="Observacao"
            maxLength={255}
            value={observation}
            onChange={e => setObservation(e.target.value)}
        />
        <button type="submit">Salvar</button>
    </form>
}
