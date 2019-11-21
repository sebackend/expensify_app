import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: '',
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onNoteChange = (e) => {
    const note = e.target.value;

    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt){
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });

  onSubmit = (e) => {
    e.preventDefault();

    const { description, amount, createdAt, note } = this.state;

    if (!description || !amount) {
      this.setState({ error: 'ERROR!!' })
    }else{
      this.setState({ error: '' })
      this.props.onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note
      });
    }
  };

  render () {
    const { error } = this.state;
    return (
      <div>
        {error && (<p>{error}</p>)}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <textarea 
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            hideKeyboardShortcutsPanel={true}
          />
          <button>
            Add Expense
          </button>
        </form>
      </div>
    );
  };
};