import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectorAuth } from '../../redux/auth/auth-selector';
import { logOut } from '../../redux/auth/auth-slice';
import ButtonSignIn from '../ButtonSignIn/ButtonSignIn';

const AuthButton = () => {
  const { user } = useSelector(selectorAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/signin');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return user ? (
    <ButtonSignIn onClick={handleLogout}>Log Out</ButtonSignIn>
  ) : (
    <ButtonSignIn onClick={handleSignIn}>Sign In</ButtonSignIn>
  );
};

export default AuthButton;
