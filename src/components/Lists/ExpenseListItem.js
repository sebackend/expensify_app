import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      <Link to={`/edit/${id}`}>
        {amount} - {createdAt}
      </Link>
    </p>
  </div>
);

export default ExpenseListItem;