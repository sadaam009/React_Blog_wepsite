import React, { useEffect } from 'react'
import Header from './Components/Header'
import Herosection from './Components/Herosection'

export default function App() {
  useEffect(()=>{
  document.body.style.backgroundColor='#f8f9fa'
  },[])
  return (
    <div>
      <Header/>
      <Herosection/>
    </div>
  )
}
