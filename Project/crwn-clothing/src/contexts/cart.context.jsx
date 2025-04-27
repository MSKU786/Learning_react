import { createContext, useReducer } from 'react';

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
    case 'SET_CART_ITEM': {
      return {
        ...state,
        ...payload,
      };
    }

    case 'SET_ISCART_OPEN': {
      return {
        ...state,
        isCartOpen: !payload,
      };
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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartCount, cartItems, totalPrice } = state;

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const updateQuantityInCart = (product, type) => {
    const newCartItems = updateQuantity(cartItems, product, type);
    updateCartItemReducer(newCartItems);
  };

  const removeItemInCart = (product) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );

    updateCartItemReducer(newCartItems);
  };

  const updateCartItemReducer = (newCartItems) => {
    const newTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const updatedCartItems = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      totalPrice: newTotalPrice,
    };
    dispatch({ type: 'SET_CART_ITEM', payload: updatedCartItems });
  };

  const setIsCartOpen = () => {
    dispatch({ type: 'SET_ISCART_OPEN', payload: isCartOpen });
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
