import {useEffect, useState} from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import {listOrders} from './services/orderApi';

export default function App() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        listOrders().then(setOrders)
    }, []);
    return <main><h1>Gestão de Pedidos</h1><OrderForm onCreated={o => setOrders(c => [...c, o])}/><OrderList
        orders={orders}/></main>
}
