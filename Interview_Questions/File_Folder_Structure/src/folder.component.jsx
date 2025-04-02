import { ReactComponent as ArrowDown } from './assests/arrow-down.svg';
import { ReactComponent as ArrowRight } from './assests/arrow-side.svg';
import { useState } from 'react';
import './styles.css';

export const Folder = ({ name, isFolder, children = [] }) => {
  const [isOpen, setIsOpen] = useState({});

  const toggleIsOpen = (path) =>
    setIsOpen((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));

  const path = name; // In a real scenario, use a full path for uniqueness.

  return (
    <div className="folder-container">
      <div
        onClick={() => toggleIsOpen(path)}
        className="folder"
      >
        {isFolder &&
          (isOpen[path] ? (
            <ArrowDown className="arrow" />
          ) : (
            <ArrowRight className="arrow" />
          ))}
        {name}
      </div>
      {isOpen[path] &&
        children.map((child) =>
          child.isFolder ? (
            <Folder
              key={child.name}
              {...child}
            />
          ) : (
            <div
              key={child.name}
              className="file"
            >
              {child.name}
            </div>
          )
        )}
    </div>
  );
};
