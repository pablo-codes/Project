import React from 'react'

import NavBar from './NavBar'
import { useEffect,useState } from 'react'
const HeaderIndex = (props) => {
  const  [scroll,setScroll]= useState()
  
  useEffect(() => {
    setScroll ( ()=>{
      document.getElementById('scroll').style.backgroundColor='#3f78e0'
    })})
  return (
    <div>
        <NavBar scroll={scroll}/>
        
    </div>
  )
}

export default HeaderIndex