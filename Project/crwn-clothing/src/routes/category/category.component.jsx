import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/products.context';
import { ProductCard } from '../../components/product-card/product-card.component';
import './category.styles.scss';

export const Category = () => {
  const { category } = useParams();
  console.log('category', category);
  const { categories } = useContext(CategoriesContext);
  console.log('categoriesMap', categories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories?.[category]);
  }, [category, categories]);

  return (
    <div className="c-container">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};
