import { useState } from 'react';

import classes from './Header.module.css';
import HeaderNavList from './HeaderNavList';


function Header() {
  const [isOffCanvasMenuVisible, setOffCanvasMenuStatus] = useState(false);
  
  const offCanvasMenu =(
    <nav className={classes['mobile-nav']} onClick={onClickBackdrop}>
      <HeaderNavList />
    </nav>
  );

  function onClickHamburger() {
    setOffCanvasMenuStatus(true);
  }

  function onClickBackdrop() {
    setOffCanvasMenuStatus(false);
  }

  return (
    <header className={classes.container}>
      <span className={classes.title}>React to dos</span>

      <nav className={classes['desktop-nav']}>
        <HeaderNavList />
      </nav>

      {isOffCanvasMenuVisible && offCanvasMenu}

      <div className={classes.hamburger} onClick={onClickHamburger} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;