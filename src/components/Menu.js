import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

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
          <li><NavLink exact to="/" className="menu__nav-item">Home</NavLink></li>
          <li><NavLink to="/about" className="menu__nav-item">About me</NavLink></li>
          <li><NavLink to="/work" className="menu__nav-item">My work</NavLink></li>
          <li><NavLink to="/contacts" className="menu__nav-item">How to reach me</NavLink></li>
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