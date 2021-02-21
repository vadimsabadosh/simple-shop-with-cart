import React, { useContext } from 'react'
import { Container, CartWrapper, CartDiv, Photo, Name, Price, DeleteBtn, ImgTrash, TotalPrice, InnerWrap } from '../Styled-components/Components';
import { formatCurrency } from '../addCurrency/currency';
import { Context } from '../context/context';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const { 
        orders: { orders, setOrders },
    } = useContext(Context);

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    }

    const totalPrice = orders.reduce((result, order) => order.price + result, 0);
    return(
        <Container>
            <CartWrapper>
                {orders.length ? orders.map((item, index) => {
                    return(
                    <CartDiv key={item.id}>
                        <Photo src={item.img}/>
                        <InnerWrap>
                            <Name>{item.name}</Name>
                            <Price>{formatCurrency(item.price)}</Price>
                            <DeleteBtn onClick={() => deleteItem(index)}><ImgTrash src='/image/delete.png'/></DeleteBtn>
                        </InnerWrap>
                    </CartDiv>
                    )
                }) : <EmptyCart/>}
                <TotalPrice>Total Price: {formatCurrency(totalPrice)}</TotalPrice>
            </CartWrapper>
        </Container>
    )

}
export default Cart;