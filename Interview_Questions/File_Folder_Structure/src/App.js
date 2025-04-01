import './styles.css';
import data from './data.json';
import { Folder } from './folder.component';

// Problem Statement: Create a file folder structure
export default function App() {
  return (
    <div className="folder-container">
      <h1>file folder structure</h1>
      <div className="">
        {data.map((item) => {
          return <Folder {...item} />;
        })}
      </div>
    </div>
  );
}
