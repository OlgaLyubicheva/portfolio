import React, {useState} from 'react';

const Menu = () => {
  const [showMenu, setMenuStatus] = useState(false);

  return (
    <>
      <Menu.Button showMenu={showMenu} forClick={setMenuStatus} />

      <nav className={`menu__nav ${showMenu ? 'menu__nav--show' : ''}`}>
        <div className="menu__nav-img">
          <div className="portrait"></div>
        </div>
        <ul className="menu__nav-list">
          <li><a href="" className="menu__nav-item">Home</a></li>
          <li><a href="" className="menu__nav-item">About me</a></li>
          <li><a href="" className="menu__nav-item">My work</a></li>
          <li><a href="" className="menu__nav-item">How to reach me</a></li>
        </ul>
      </nav>
    </>
  );
};

Menu.Button = ({ showMenu, forClick }) => (
  <div
    className={`menu__btn ${showMenu ? 'menu__btn--close' : ''}`}
    onClick={() => forClick(!showMenu)}
  >
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
    <div className="menu__btn-line"></div>
  </div>
);

export default Menu;