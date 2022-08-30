import React, { useState } from 'react';
import s from './ReportsCategories.module.scss';
import icon from '../../images/icon.svg';
import ReportsCategoryList from 'components/ReportsCategoryList/ReportsCategoryList';

export default function ReportsCategories({
  incomes,
  expenses,
  curCategory,
  setCurCategory,
}) {
  const [pickedState, setPickedState] = useState('EXPENSES');

  const togglePickedState = () => {
    setPickedState(prev => (prev === 'EXPENSES' ? 'INCOMES' : 'EXPENSES'));
  };
  const categories = pickedState === 'EXPENSES' ? expenses : incomes;

  return (
    <div className={s.backgroundCategoryList}>
      <div className={s.expenses}>
        <button className={s.titleBtn} onClick={togglePickedState}>
          <svg width={10} height={10} className={s.iconsExpenses}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </button>
        <h2 className={s.title}>{pickedState}</h2>
        <button className={s.titleBtn} onClick={togglePickedState}>
          <svg width={10} height={10} className={s.iconsExpenses}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </button>
      </div>
      <ReportsCategoryList
        categories={categories}
        transType={pickedState.toLowerCase()}
        curCategory={curCategory}
        setCurCategory={setCurCategory}
      />
    </div>
  );
}
