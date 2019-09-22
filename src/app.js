import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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

// edit
// help

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddPage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotfoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
