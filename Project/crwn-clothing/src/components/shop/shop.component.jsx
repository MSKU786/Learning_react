import { Fragment, useContext } from 'react';
import './shop.component.scss';
import { CategoriesContext } from '../../contexts/products.context';
import { ProductCard } from '../product-card/product-card.component';
import { CategoryPreview } from '../category-preview/category-preview.component';

export const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </div>
  );
};
