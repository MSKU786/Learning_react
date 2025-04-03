import "./styles.css";

export const Queue = (props) => {
  const { id, data } = props;

  return (
    <div className="queue">
      {data?.data.map((num, ind) => (
        <div>{num}</div>
      ))}
    </div>
  );
};
