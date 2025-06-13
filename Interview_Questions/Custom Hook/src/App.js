import './styles.css';
import { useFetch } from './useFetch';

export default function App() {
  const { loading, error, data } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) {
    return <div>loading ......</div>;
  }

  if (error) {
    return <div>Somethign went wrong {error.message}</div>;
  }
  return (
    <div className="App">
      <h1>Data </h1>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
