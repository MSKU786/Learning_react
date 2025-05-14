export default function Header({ colorState, setColorState }) {
  console.log('This is props', colorState, setColorState);
  return (
    <div>
      <button
        onClick={(e) => setColorState(!colorState)}
        className={colorState ? 'button-dark' : 'button'}
      >
        Toggle
      </button>
    </div>
  );
}
