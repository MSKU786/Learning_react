import {
  DirectoryContainer,
  BackgroundImage,
  DirectoryBodyContainer,
} from './directory-item.style';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Buy Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
