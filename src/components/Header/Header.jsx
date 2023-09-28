import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

export const Header = ({ loggedIn }) => {
  const location = useLocation();

  return (
    <header
      className={location.pathname == '/' ? 'header' : 'header header-dark'}
    >
      <Link className="header__logo" to="/">
        <img src={logo} alt="Логотип" />
      </Link>

      <Navigation loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
