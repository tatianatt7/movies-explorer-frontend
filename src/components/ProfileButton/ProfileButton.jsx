import { Link } from 'react-router-dom';
import './ProfileButton.css';

export const ProfileButton = () => {
  return (
    <li className="profile__button-account">
    <Link to="/profile" >
      Аккаунт
      <div className='profile__button-icon' />
    </Link>
  </li>
  )
}

export default ProfileButton;