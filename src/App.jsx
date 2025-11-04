import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'

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
      {/*Contact*/}
      {/*Footer*/}
    </div>
  )
}

export default App
