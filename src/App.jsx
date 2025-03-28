import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import MovieProvider from './MovieContext'
import Home from './pages/Home'
import Browse from './pages/Browse'
import MovieGen from './pages/MovieGen'

function App() {

  return (
    <MovieProvider>
      <Router>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/browse">Browse</Link>
              </li>
              <li>
                <Link to="/generator">Movie Generator</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/generator" element={<MovieGen />} />
          </Routes>
        </div>

      </Router>
    </MovieProvider>
  )
}

export default App
