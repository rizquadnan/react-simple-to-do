import { Link } from 'react-router-dom';

import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.container}>
      <span className={classes.title}>React To dos</span>
      <nav>
        <ul className={classes['navigation-list']}>
          <li className={classes['navigation-item']}>
            <Link to='/'>To do list</Link>
          </li>
          <li className={classes['navigation-item']}>
            <Link to='/new-todo'>Add new to do</Link>
          </li>
          <li className={classes['navigation-item']}>
            <Link to='/today'>Today to dos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;