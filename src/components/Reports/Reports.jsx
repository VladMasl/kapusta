import Container from 'components/Container/Container';
import React from 'react';
import { useState } from 'react';
import { getTransactionReportApi } from '../../utils/reportsApi';
import ReportsHeader from '../ReportsHeader/ReportsHeader';
import ReportsCategories from '../ReportsCategories/ReportsCategories';

import s from './Reports.module.scss';

export default function Reports() {
  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});

  getTransactionReportApi().then(res => {
    setIncomes(res.incomes);
    setExpenses(res.expenses);
  });

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <Container>
        <ReportsHeader incomes={incomes} expenses={expenses} />
        <ReportsCategories />
      </Container>
    </div>
  );
}
