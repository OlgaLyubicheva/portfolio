import React from 'react';

const Menu = () => {
  return (
    <>
      <Menu.Button/>

      <nav className="menu__nav">
        <div className="menu__img">
        </div>
        <ul className="munu__list">
          <li><a href="">Home</a></li>
          <li><a href="">About me</a></li>
          <li><a href="">My work</a></li>
          <li><a href="">How to reach me</a></li>
        </ul>
      </nav>
    </>
  );
};

Menu.Button = () => (
  <div className="menu__btn">
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
  </div>
);

export default Menu;