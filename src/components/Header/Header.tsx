import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src="https://img.icons8.com/cute-clipart/256/pages.png" alt="pen on icon"/>
      <h1 className="header__logo">TextEditor</h1>
    </div>
  );
};

export default Header;