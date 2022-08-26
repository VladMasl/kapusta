import s from './BalanceForm.module.scss';
import NumberFormat from 'react-number-format';
import BalanceModal from 'components/BalanceModal/BalanceModal';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getAuthBalance } from 'redux/auth/AuthSelectors';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { newBalance } from 'redux/auth/authOperations';
import { useLocation } from 'react-router-dom';

const BalanceForm = ({ isReportsPage }) => {
  const [balance, setBalance] = useState();

  const dispatch = useDispatch();
  const mob = useMediaQuery({ query: '(max-width: 768px)' });
  const desk = useMediaQuery({ query: '(min-width: 1280px)' });

  const getBalance = useSelector(getAuthBalance);
  useEffect(() => {
    if (getBalance === 0 || balance === getBalance) return;
    setBalance(getBalance);
  }, [getBalance]);

  const handleChange = e => {
    const value = e.target.value;
    const sliceValue = value
      .slice(0, value.length - 4)
      .split(' ')
      .join('');
    const mathRound = Math.round(sliceValue);
    setBalance(mathRound);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(newBalance({ newBalance: balance }));
  };
  return (
    <div className={isReportsPage ? s.balanceReports : s.balance}>
      <p className={s.title}>Balance:</p>
      <form onSubmit={handleSubmit} className={s.form}>
        <NumberFormat
          className={isReportsPage ? s.inputRepots : s.input}
          disabled={getBalance > 0}
          name="balance"
          suffix={' UAH'}
          allowLeadingZeros={true}
          thousandSeparator={' '}
          decimalScale={2}
          placeholder={'00.00 UAH'}
          fixedDecimalScale={true}
          allowNegative={false}
          onChange={handleChange}
          value={balance}
        />
        {isReportsPage && desk && (
          <button type="submit" className={s.submit} disabled={getBalance > 0}>
            Confirm
          </button>
        )}
        {!isReportsPage && (
          <button type="submit" className={s.submit} disabled={getBalance > 0}>
            Confirm
          </button>
        )}
      </form>
      {getBalance === 0 && <BalanceModal />}
    </div>
  );
};

export default BalanceForm;
