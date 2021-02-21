import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { db } from './components/db/db';
import { Context } from './components/context/context';
import { GlobalStyle } from './components/Styled-components/GlobalStyle';
import { useOrders } from './components/Hooks/useOrders';
import './components/Styled-components/style.css';
import Section from './components/Section/Section';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {

  const orders = useOrders();

  useEffect(() => {
    localStorage.setItem('Orders', JSON.stringify(orders.orders));
  }, [orders.orders]);

  return (
    <BrowserRouter>
      <Context.Provider value={{ db, orders }}>
        <GlobalStyle />
        <Header />
        <Route exact path='/' render={() => 
          <> 
            <Section /> 
            { orders.orders.length && <Link className='CartIcon' to='/cart' /> }
          </>} 
        />
        <Route exact path='/cart' component={Cart} />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
