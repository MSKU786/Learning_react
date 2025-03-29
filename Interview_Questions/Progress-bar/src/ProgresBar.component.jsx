import './styles.css';

export const ProgresBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <span
        className="filled"
        style={{ width: `${progress}%` }}
      ></span>
    </div>
  );
};
