import React from 'react';
import { getExpenseCategories } from '../../utils/api';

// const categories = [
//   {
//     icon: '',
//   },
// ];

export default function ReportsCategoryList() {
  getExpenseCategories();
  return (
    <div>
      <ul>
        <li>
          <span>total</span>
          <span>ICON</span>
          <span>Category</span>
        </li>
      </ul>
    </div>
  );
}
