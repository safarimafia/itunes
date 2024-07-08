import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

// Main App component
const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.some(fav => fav.trackId === item.trackId)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (item) => {
    setFavorites(favorites.filter(fav => fav.trackId !== item.trackId));
  };

  
  useEffect(() => {
    console.log("Current Favorites:", favorites);
  }, [favorites]);

  return (
    <div>
     
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
   
      <Routes>
        <Route path="/" element={<Home onFavorite={addFavorite} favorites={favorites} onRemoveFavorite={removeFavorite} />} />
      </Routes>
    </div>
  );
};

export default App;
