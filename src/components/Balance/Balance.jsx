import { Link, useLocation } from 'react-router-dom';
import icon from '../../images/icon.svg';
import { useMediaQuery } from 'react-responsive';
import s from './Balance.module.scss';
import BalanceForm from '../BalanceForm/BalanceForm';
import LinkReports from 'components/LinkReports/LinkReports';
import Pagination from 'components/Pagination/Pagination';
import GooBack from 'components/GooBack/GooBack';

const Balance = () => {
  const location = useLocation();
  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  const locationbtnGoBack = location.state?.from ?? '/transactions';
  const isReportsPage = location.pathname.slice(1, 8) === 'reports';

  return (
    <section className={s.section}>
      {!isReportsPage && <LinkReports location={location} />}
      {isReportsPage && (
        <div className={s.wrapPagination}>
          <Pagination />
        </div>
      )}
      <BalanceForm isReportsPage={isReportsPage} />

      {isReportsPage && (
        <div className={s.goBack}>
          <GooBack title={!mob && 'Main page'} isReportsPage={isReportsPage} />{' '}
        </div>
      )}
    </section>
  );
};

export default Balance;
