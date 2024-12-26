import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
    </>
  )
}

export default App