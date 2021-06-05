import classes from './HeaderNavList.module.css';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../api/firebase';

function HeaderNavList() {
  const history = useHistory();

  function onSignOut() {
    auth.signOut();

    history.replace('/');
  }

  return (
    <ul className={classes['nav-list']}>
      <li className={classes['nav-item']}>
        <Link to='/list'>To do list</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/new'>Add new to do</Link>
      </li>
      <li className={classes['nav-item']}>
        <span onClick={onSignOut}>Logout</span>
      </li>
    </ul>
  )
}

export default HeaderNavList;