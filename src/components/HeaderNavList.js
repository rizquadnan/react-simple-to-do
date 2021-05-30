import classes from './HeaderNavList.module.css';
import { Link } from 'react-router-dom';

function HeaderNavList() {
  return (
    <ul className={classes['nav-list']}>
      <li className={classes['nav-item']}>
        <Link to='/'>To do list</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/new-todo'>Add new to do</Link>
      </li>
    </ul>
  )
}

export default HeaderNavList;