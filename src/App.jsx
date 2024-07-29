import React, { useEffect } from 'react'
import Header from './Components/Header'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Blog from './Components/Blog'

export default function App() {
  useEffect(()=>{
  document.body.style.backgroundColor='#f8f9fa'
  },[])
  return (
    <div>
      <Header/>
      <Herosection/>
      <Blog/>
      <About/>
    </div>
  )
}
