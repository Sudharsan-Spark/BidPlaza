import React,{useState} from 'react'
import './Styles/navStyles.css'
import { useNavigate} from 'react-router-dom'
import { auth } from '../api/firebase-config';
import userLogo from './Images/UserLogo.png'
import { signOut } from 'firebase/auth';


function Navbar({name,setName}) {
  console.log("nickname:",name)
  const [visible,setVisible]=useState(false)
 

  const navigate=useNavigate()

  const navigateHome=()=>{
	navigate("/home")
  }

  const navigateContact=()=>{
    navigate("/contact")
    }

  const logOut= async(e) =>{
    try{
    setName("user")
    await signOut(auth)
    navigate('/')
    console.log(name)
   
    }
    catch(error){
      alert("Failed to log out")
    }
  
  }

  
 
  return (
    <div>
        <nav className='navbar'>
            <ul>
                <li onClick={navigateHome}><a href='#'>Home</a></li>
                <li><a href='#'>Purchases</a></li>
                <li onClick={navigateContact}><a href="#">Contact us</a></li>
                <div className='search'>
                    <img src={userLogo} style={{width:"75px",height:"75px"}} alt='userLogo' onClick={()=>setVisible(!visible)}/>
                    {visible && <button onClick={logOut}>Logout</button>}
                    {name}
                    {/* <input className='logoimg' type='text' value={sentence}  readOnly/> */}                  
                </div>
            </ul>
        </nav>
        
    </div>
  )
}

export default Navbar 