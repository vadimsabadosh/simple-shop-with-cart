import React from 'react';
import { Container } from '../Styled-components/Components';
import { NavLink } from 'react-router-dom';
import '../Styled-components/style.css';
const Header = () => {
    return(
        <>
            <header>
                <Container>
                    <ul className='nav-list'>
                        <li className="item">
                            <NavLink exact to="/" className="item-link" activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="item">
                            <NavLink exact to="/cart" className="item-link" activeClassName='active'>Cart</NavLink>
                        </li>
                    </ul>
                </Container>
            </header>
        </>
    )
}
export default Header;