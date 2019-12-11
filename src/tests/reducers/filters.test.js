import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SORT_BY_DATE'};

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'TEXT EXAMPLE';
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_TEXT_FILTER', text };
  const state = filtersReducer(currentState, action);

  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment().startOf('year');
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducer(currentState, action);

  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment().startOf('year');
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducer(currentState, action);

  expect(state.endDate).toEqual(endDate);
});
