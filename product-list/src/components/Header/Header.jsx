import React from 'react';
import classes from './Header.module.scss'
const Header = () => {
  return (
      <>
      <header className={classes.header}>
      <div className={classes.header_text}>
        <h1>Список продуктов</h1>
      </div>
      </header>
</>
  );
};

export default Header;