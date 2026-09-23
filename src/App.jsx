import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about' 
import Contact from './pages/contact'
import Booking from './pages/Booking'
import './App.css'
import Explore from './pages/explore'
import Destination from './pages/destination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/destination/:name" element={<Destination />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
