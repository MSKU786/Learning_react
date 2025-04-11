import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHander = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutHander}
            >
              SIGN OUT
            </span>
          ) : (
            <NavLink to="/sign-in">SIGN IN</NavLink>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
