import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 1000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 560 }))
store.dispatch(addExpense({ description: 'Rent', amount: 315000 }))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
