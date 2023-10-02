import { Link } from 'react-router-dom';
import './ProfileButton.css';

export const ProfileButton = () => {
  return (
    <li className="navigation__button-account">
      <Link to="/profile">
        Аккаунт
        <div className="navigation__button-icon" />
      </Link>
    </li>
  );
};

export default ProfileButton;
