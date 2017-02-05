import React from 'react';

import '../../sass/componentStyles/nav.scss';

import NavToggle from './Nav/NavToggle';
import NavLinks from './Nav/NavLinks';

const Nav = (props) => (
    <nav className="navbar">
        <div className="container-fluid">
            <NavToggle { ...props }/>
            <NavLinks { ...props } showBasket={ true } showAsSidebar={ false } />
        </div>
    </nav>
);

Nav.defaultProps = {
    linksData: [
        {
            linkPath: "/sale",
            linkName: "Sale!",
            linkFilter: "SHOW_SALE"
        },
        {
            linkPath: "/categories",
            linkName: "Categories",
            linkFilter: "SHOW_HEALTH_BODY"
        },
        {
            linkPath: "/search",
            linkName: "Search",
            linkFilter: "SHOW_ALL"
        },
        {
            linkPath: "/about",
            linkName: "About",
            linkFilter: "SHOW_SALE"
        }
    ],
    basket: {
        linkPath: "/shopping-cart",
        linkName: "ShoppingCart",
        linkFilter: "SHOW_SALE"
    },
    linkActiveStyle: {
        color: '#7BB480',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

export default Nav;
