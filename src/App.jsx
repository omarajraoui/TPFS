// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FizzBuzz from './Components/FizzBuzz';
import AnagramChecker from './Components/AnagramChecker';
import FavoriteSeries from './Components/FavoriteSeries';
import Timer from './Components/Timer';


const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-w-screen flex justify-center items-center">
        <div className="bg-white rounded shadow-md w-screen h-screen ">
          <nav className="bg-blue-500 w-screen p-4 text-center">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/" className="text-black">Home</Link>
              </li>
              <li>
                <Link to="/fizzbuzz" className="text-black">FizzBuzz</Link>
              </li>
              <li>
                <Link to="/anagram" className="text-black">Anagram Checker</Link>
              </li>
              <li>
                <Link to="/favorite-series" className="text-black">Favorite Series</Link>
              </li>
              <li>
                <Link to="/timer" className="text-black">Timer</Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fizzbuzz" element={<FizzBuzz />} />
              <Route path="/anagram" element={<AnagramChecker />} />
              <Route path="/favorite-series" element={<FavoriteSeries />} />
              <Route path="/timer" element={<Timer />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto mt-8 text-black">
      <h2 className="text-3xl font-bold">TP!</h2>
    </div>
  );
};

export default App;
