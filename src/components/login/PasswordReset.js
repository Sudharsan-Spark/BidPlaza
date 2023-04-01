import React,{useState} from 'react'
import './logStyles.css'
import {Link} from "react-router-dom"
import { auth } from '../api/firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth';


function PasswordReset() {

  const [loginMail,setLoginMail]=useState("");
  const [message,setMessage]=useState("")
  const [error,setError]=useState("")
 

  const reset =async (e)=>{
    e.preventDefault()
    
    try{
    setMessage("")
    setError("")
    await sendPasswordResetEmail(auth,loginMail)
    setMessage("Check your inbox for further instructions")

    }
    catch(error){
      setError("Failed to reset password")
      console.log(error.message)
    }
      
  }
  
  return (
	
		<div className='log full-screen'>
		
		
		<form >
       
        <div class="headingsContainer">
			<h2>Password Reset</h2>
            <h3 ><u>Fill in your Email</u></h3>
            <br></br>
            
            {error && <p style={{fontFamily:'Gill Sans MT',fontSize:'x-large', color:'red',float:'left'}}><u>{error}</u></p>}
            {message && <p style={{fontFamily:'Gill Sans MT',fontSize:'x-large', color:'green',float:'left'}}><u>{message}</u></p>}
            
        </div>

        
        <div class="mainContainer">
            <input type="text" placeholder="User Mail" name="userMail"  onChange={e=>setLoginMail(e.target.value)} required/>
            <br></br> 
            <br></br>
            <button type='submit' onClick={reset}>Reset Password</button>
            <br></br>
            <br></br>
            
            <Link to="/" style={{color:'white',fontFamily:'Gill Sans MT',fontSize:'x-large'}}>Back To Login</Link>
        </div>
		
       
      </form>
	  <br></br>
	  <br></br>
	  <br></br>
	</div>

	

	
    )
}

export default PasswordReset