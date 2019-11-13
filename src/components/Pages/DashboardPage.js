import React from 'react';
import ExpenseList from '../Lists/ExpenseList';
import ExpenseListFilters from '../Lists/ExpenseListFilters';

const DashboardPage = () => (
  <div>
    Hola mundo desde la raíz de las rutas
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;