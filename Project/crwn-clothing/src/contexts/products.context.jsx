import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data.json';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const getProducts = async () => {
      await addCollectionAndDocuments('products', SHOP_DATA);
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
