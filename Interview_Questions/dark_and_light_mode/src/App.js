import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { AboutUs } from './pages/about-us';
import { Header } from './component/header';
import './styles.css';

export default function App() {
  const [colorState, setColorState] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
      </Routes>
    </Router>
  );
}
