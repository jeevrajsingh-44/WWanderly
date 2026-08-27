import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
