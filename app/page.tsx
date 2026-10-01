import React from 'react'
import Navbar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experiences from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className='w-full container mx-auto max-w-7xl px-4'>
      {/*Nav*/}
      <Navbar />
      {/*Hero*/}
      <Hero />
      {/*About*/}
      <About />
      {/*projects*/}
      <Projects />
      {/*Experiences*/}
      <Experiences />
      {/*Contact*/}
      <Contact />
      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default App