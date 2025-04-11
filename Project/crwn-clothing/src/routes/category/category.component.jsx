import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/products.context';
import { ProductCard } from '../../components/product-card/product-card.component';
import { CategoryContainer } from './category.styles';

export const Category = () => {
  const { category } = useParams();

  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories?.[category]);
  }, [category, categories]);

  return (
    <CategoryContainer>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </CategoryContainer>
  );
};
