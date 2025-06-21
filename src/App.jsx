import React from 'react'
import Navbar from './Component/Navbar'
import Service from './Component/Service'
import Hero from './Component/Hero'
import Project from './Component/Project'
import Footer from './Component/Footer'
import Login from "./Component/login";


import About from './Component/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Login />
      <Footer />
      
     

    </div>
  )
}

export default App

