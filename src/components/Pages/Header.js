import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="selected" exact={true} >Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="selected" >Create Expense</NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="selected" >Help</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;