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
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_TEXT_FILTER', text: 'TEXT EXAMPLE' };
  const state = filtersReducer(currentState, action);

  expect(state.text).toBe('TEXT EXAMPLE');
});

test('should set startDate filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_START_DATE', startDate: moment().startOf('year') };
  const state = filtersReducer(currentState, action);

  expect(state.startDate).toEqual(moment().startOf('year'));
});

test('should set endDate filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: 'SET_END_DATE', endDate: moment().startOf('year') };
  const state = filtersReducer(currentState, action);

  expect(state.endDate).toEqual(moment().startOf('year'));
});
