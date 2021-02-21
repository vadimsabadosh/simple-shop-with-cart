import { useState } from 'react'

export function useOrders() {  
    const jsonLS = localStorage.getItem('Orders');
    
    const [orders, setOrders] = useState(
        JSON.parse(jsonLS) || []
    );

    return {orders, setOrders};


}