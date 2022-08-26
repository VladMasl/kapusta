import icon from '../../images/icon.svg';
import s from './GooBack.module.scss'


const GooBack=()=>{
  
return(
    <button type="button" className={s.btnBack}>
    <svg width={18} height={12}>
      <use href={`${icon}#icon-left_orange`} />
    </svg>
  </button>
)
}

export default GooBack;