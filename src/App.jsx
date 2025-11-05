import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Footer from './section/Footer'

function App() {
  return (
    <div
    className='container mx-auto max-w-7xl'>
      {/*Nav*/}
      <Navbar />
      {/*Hero*/}
      <Hero />
      {/*About*/}
      <About />
      {/*projects*/}
      <Projects />
      {/*Contact*/}
      <Contact />
      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default App
