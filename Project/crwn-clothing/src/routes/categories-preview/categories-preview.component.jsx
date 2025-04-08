import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/products.context';
import { CategoryPreview } from '../../components/category-preview/category-preview.component';

export const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
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
    </>
  );
};
