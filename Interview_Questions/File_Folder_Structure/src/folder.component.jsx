import { ReactComponent as ArrowDown } from './assests/arrow-down.svg';
import { ReactComponent as ArrowRight } from './assests/arrow-side.svg';
import { useState } from 'react';
import './styles.css';

export const Folder = ({ name, isFolder, children }) => {
  const [isOpen, setIsOpen] = useState({});
  const toggleIsOpen = (name) =>
    setIsOpen((prev) => {
      return {
        ...prev,
        [name]: !prev[name],
      };
    });

  return (
    <div className="folder-container">
      <div onClick={() => toggleIsOpen(name)}>
        {isOpen?.[name]
          ? isFolder && <ArrowDown className="arrow" />
          : isFolder && <ArrowRight className="arrow" />}
        {name}
        {isOpen?.[name] &&
          children.map((child) => {
            if (child.isFolder) {
              return <Folder {...child} />;
            }
            return <div className="file">{child.name}</div>;
          })}
      </div>
    </div>
  );
};
