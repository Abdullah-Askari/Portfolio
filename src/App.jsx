import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Experiences from './section/Experiences'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Footer from './section/Footer'

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