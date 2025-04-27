import { useState, createContext, useEffect, useReducer } from 'react';
import { USER_ACTION_TYPE } from './user.context';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART': {
      return {};
    }

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const updateQuantity = (cartItems, product, type) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  if (existingCartItem && type === 'add') {
    return cartItems.map((cartItem) => {
      if (cartItem.id === existingCartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }
  if (existingCartItem && type === 'remove') {
    return cartItems.map((cartItem) => {
      if (
        cartItem.id === existingCartItem.id &&
        existingCartItem.quantity >= 1
      ) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);

    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (product) => {
    const newCartItems = setCartItems(addCartItem(cartItems, product));
    updateCartItemReducer(addCartItem);
  };

  const updateQuantityInCart = (product, type) => {
    const newCartItems = setCartItems(updateQuantity(cartItems, product, type));
    updateCartItemReducer(newCartItems);
  };

  const removeItemInCart = (product) => {
    const newCartItems = setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== product.id)
    );

    updateCartItemReducer(newCartItems);
  };

  const updateCartItemReducer = (newCartItems) => {
    dispatch({ type: '', payload: newCartItems });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    updateQuantityInCart,
    removeItemInCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
