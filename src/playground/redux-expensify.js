import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  { description= '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


const expensesReducerDefaultState = [];

// Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id );
    default:
      return state;
  }
};

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne    = store.dispatch(addExpense({ description: 'Uno', amount: 500 }));
const expenseTwo    = store.dispatch(addExpense({ description: 'Dos', amount: 1000 }));
const expenseThree  = store.dispatch(addExpense({ description: 'Tres', amount: 250 }));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

// const demoState = {
//   expenses: [{
//     id: 'qwerty',
//     description: 'January rent',
//     note: 'This was the final payment for that address...',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'date', // date or amunt
//     startDate: undefined,
//     endDate: undefined
//   }
// };
const user = {
  name: 'Seba',
  age: 29,
  city: 'Melipilla'
}

console.log({
  ...user
});