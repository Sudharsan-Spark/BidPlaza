import React,{useState} from 'react'
import './Styles/navStyles.css'
import Timer from './Timer'


function AuctionNavBar({setTime}) {
  const [cd,setCd]=useState(0)
  setTime(cd)
  if(cd>=0){
    return (
        <div className='navbar' style={{height:'100px'}}>
            <p>Auction Timer  <Timer seconds={90} setCd={setCd}/></p>             
         </div>

    )
  }
  else{
  return (
    <div className='navbar' style={{height:'100px'}}>
          <p >Auction Ended</p>   
    </div>
  )
  
}
}

export default AuctionNavBar