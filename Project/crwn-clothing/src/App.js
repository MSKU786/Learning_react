import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { Shop } from './components/shop/shop.component';

const App = () => {
  console.log('hey');
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/sign-in"
          element={<SignIn />}
        />
      </Route>
    </Routes>
  );
};

export default App;
