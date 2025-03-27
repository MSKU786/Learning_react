import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ Children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{Children}</ProductContext.Provider>
  );
};
