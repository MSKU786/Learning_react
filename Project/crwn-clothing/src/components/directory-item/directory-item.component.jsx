import './directory-item.styles.scss';

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl } = directory;
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Buy Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
