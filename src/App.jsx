import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
