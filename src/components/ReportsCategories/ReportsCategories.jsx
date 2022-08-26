import React from 'react';
import { useState } from 'react';
import s from './ReportsCategories.module.scss';
import icon from '../../images/icon.svg';
import ReportsCategoryList from 'components/ReportsCategoryList/ReportsCategoryList';

export default function ReportsCategories() {
  const [pickedState, setPickedState] = useState('EXPENSES');
  const togglePickedState = () => {
    setPickedState(prev => (prev === 'EXPENSES' ? 'INCOMES' : 'EXPENSES'));
  };
  return (
    <div className={s.reportsCategories}>
      <div className={s.toggle}>
        <span onClick={togglePickedState}>
          <svg width={10} height={10} className={s.svg}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </span>
        <p>{pickedState}</p>
        <span onClick={togglePickedState}>
          <svg width={10} height={10} className={s.svg}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </span>
      </div>
      {/* <ReportsCategoryList /> */}
    </div>
  );
}
