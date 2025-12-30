import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import logo from './assets/logo.png';
import './Header.css';
import NavbarScroll from './NavbarScroll.jsx';

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={logo} alt="logo" className='logo' />
        <h1 className='heading'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Parhit Saris Welfare Trust
          </Link>
        </h1>
      </div>
      <div className="header-right">
        <NavbarScroll />
        <Link to="/donate" className="donate">
         Donate Now
        </Link>
      </div>
    </div>
  );
}

export default Header;
