import { createContext, useEffect, useState } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {}, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
