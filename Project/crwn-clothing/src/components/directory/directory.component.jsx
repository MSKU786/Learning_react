import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="d-container">
      {categories.map((category) => {
        console.log('category', category);
        return (
          <DirectoryItem
            id={category.id}
            directory={category}
          />
        );
      })}
    </div>
  );
};

export default Directory;
