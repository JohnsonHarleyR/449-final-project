import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import MovieProvider from './MovieContext'
import Home from './pages/Home'
import Browse from './pages/Browse'
import MovieGen from './pages/MovieGen'
import logo from '/logo/logo.svg'

function App() {



  return (
    <MovieProvider>
      <Router>
        <header>
          <div className='Logohead'>
            <img src={logo} alt="Cinemood Logo" className="logo" />
            <h1 className='headertitle'>CINEMOOD</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Browse</Link></li>
              <li><Link to="/generator">Movie Generator</Link></li>
            </ul>
          </nav>
        </header>
        <div className='container'>
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
