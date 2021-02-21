import React, { useContext } from 'react'
import { Catalog, Card, Img, Button } from '../Styled-components/Components';
import { formatCurrency } from '../addCurrency/currency';
import { Context } from '../context/context';


const Section = () => {
    const { 
        db,
        orders: { orders, setOrders },
    } = useContext(Context);


    const addToOrder= (item) => {
        setOrders([...orders, item]);
    }
    return(
        <Catalog>
            { db.map(item => {
                return(
                <Card key={item.id}>
                    <Img src={item.img}  alt={item.name}/>
                    <h3>{formatCurrency(item.price)}</h3>
                    <h4>{item.name}</h4>
                    <p>{item.label}</p>
                    <Button 
                        onClick={() => addToOrder(item)} 
                        disabled={orders.find(order => order.id === item.id)}
                    >
                        {
                            orders.find(order => order.id === item.id) ?
                                 'Added': 'Add to Cart' 
                        }
                    </Button>
                </Card>
                )
            })  }
        </Catalog>
    )
}
export default Section;