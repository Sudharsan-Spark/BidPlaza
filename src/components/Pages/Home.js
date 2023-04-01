import React from 'react'
import Navbar from './Navbar'
import './Styles/cardStyles.css'
import { useNavigate } from 'react-router-dom'

function Home({name,setName}) {
  const navigate=useNavigate()
  const naviAc1=()=>{
	navigate("/auction1")
  }
  const naviAc2=()=>{
    navigate("/auction2")
  }
  return (
    <div>
       <Navbar name={name} setName={setName}/> 
       <h1 style={{textAlign:'center',color:'green'}}>Choose Auction</h1>
           <div className='card1'>
               <span className='a' onClick={naviAc1}><h3>Auction 1</h3></span>
               <span className='a' onClick={naviAc2}><h3>Auction 2</h3></span>
           </div>
      
    </div>
   
  )
}

export default Home