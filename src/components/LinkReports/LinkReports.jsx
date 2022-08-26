import { Link } from 'react-router-dom';
import icon from '../../images/icon.svg';
import s from './LinkReports.module.scss';

const LinkReports = ({ location }) => {
  return (
    <Link to="/reports" state={{ from: location }} className={s.btn}>
      Reports
      <svg width={24} height={24} className={s.svg}>
        <use href={`${icon}#icon-bar_chart-24px1`} />
      </svg>
    </Link>
  );
};

export default LinkReports;
