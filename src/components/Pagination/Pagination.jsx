import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAuthToken} from '../../redux/auth/AuthSelectors';
import {getPeriod} from '../../utils/reportsApi';
import icon from '../../images/icon.svg';
import s from './Pagination.module.scss';

const  monthsArr = [
  { id: 1, label: 'January' },
  { id: 2, label: 'February' },
  { id: 3, label: 'March' },
  { id: 4, label: 'April' },
  { id: 5, label: 'May' },
  { id: 6, label: 'June' },
  { id: 7, label: 'July' },
  { id: 8, label: 'August' },
  { id: 9, label: 'September' },
  { id: 10, label: 'October' },
  { id: 11, label: 'November' },
  { id: 12, label: 'December' },
];

const Pagination = () => {
  const dispatch = useDispatch();
 const accessToken = useSelector(getAuthToken);

  const [nameMonth, setNameMonth] = useState(
    monthsArr.find(el => el.id === new Date().getMonth() + 1)
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(`${year}-${nameMonth.id}`);

  const nextMnth = () => {
    if (nameMonth.id < monthsArr.length) {
      setNameMonth(monthsArr[nameMonth.id]);
    } else {
      setNameMonth(monthsArr[0]);
      setYear(year + 1);
    }
  };

  const prevNext = () => {
    const dateIndex = monthsArr.indexOf(nameMonth);
    if (dateIndex > 0) setNameMonth(monthsArr[dateIndex - 1]);
    else {
      setNameMonth(monthsArr[monthsArr.length - 1]);
      setYear(year - 1);
    }
  };

  useEffect(() => {
    setSelectedDate(`${year}-${nameMonth.id.toString().padStart(2, '0')}`);
  }, [nameMonth, year]);

  useEffect(() => {
    dispatch(getPeriod(selectedDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, accessToken]);

  return (
    <div className={s.pagContainer}>
      <p className={s.paragraph}>Current period:</p>
      <div className={s.btnContainer}>
        <button onClick={prevNext} type="button" className={s.btnLeft}>
          <svg width={10} height={10}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </button>
        <h2 className={s.month}>
          {nameMonth?.label} {year}
        </h2>
        <button onClick={nextMnth} type="button" className={s.btnRigth}>
          <svg width={10} height={10}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
