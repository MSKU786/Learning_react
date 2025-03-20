import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        console.log('category', category);
        return (
          <CategoryItem
            id={category.id}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default Directory;
