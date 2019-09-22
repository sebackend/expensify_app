import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    Hola mundo desde la raíz de las rutas
  </div>
);

const AddPage = () => (
  <div>
    Crearr.....
  </div>
);

const EditPage = () => (
  <div>
    Editar!
  </div>
);

const HelpPage = () => (
  <div>
    Aiuuudaaa
  </div>
);

const NotfoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

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
          <NavLink to="/edit" activeClassName="selected" >Edit Expense</NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="selected" >Help</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddPage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotfoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
