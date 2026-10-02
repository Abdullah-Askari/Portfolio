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
    <div className='w-full overflow-x-hidden'>
      {/*Nav*/}
      <Navbar />
      {/*Hero - Edge-to-edge full width background with contained content*/}
      <Hero />
      {/*Sections contained in max-w-7xl*/}
      <div className='w-full container mx-auto max-w-7xl px-4'>
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
    </div>
  )
}

export default App