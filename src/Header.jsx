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
        <h1 className='heading'>Parhit Saris Welfare Trust</h1>
    </div>
    <div className='header-right'>
        
         <NavbarScroll/> 
         <button className='donate' >Donate Now</button>       
    </div>
   </div>
  );
}

export default Header;