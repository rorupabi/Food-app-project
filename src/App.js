import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import FoodMenu from './components/FoodMenu'
import Category from './components/Category'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <FoodMenu />
      <Category />
      <Footer />
    </div>
  )
}

export default App