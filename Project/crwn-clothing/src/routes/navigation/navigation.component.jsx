import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHander = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="logo-container"
          to="/"
        >
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/shop"
          >
            SHOP
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutHander}
            >
              {' '}
              Sign-Out
            </span>
          ) : (
            <Link
              className="nav-link"
              to="/sign-in"
            >
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
