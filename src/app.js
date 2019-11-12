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

store.dispatch(addExpense({ description: 'Water Bill' }))
store.dispatch(addExpense({ description: 'Gas Bill' }))

store.dispatch(setTextFilter('gas'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

setTimeout(() => {
  store.dispatch(setTextFilter('water'));
}, 3000);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
