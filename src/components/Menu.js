import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link to="/" className="menu__nav-item">Home</Link></li>
          <li><Link to="/about" className="menu__nav-item">About me</Link></li>
          <li><Link to="/work" className="menu__nav-item">My work</Link></li>
          <li><Link to="/contacts" className="menu__nav-item">How to reach me</Link></li>
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