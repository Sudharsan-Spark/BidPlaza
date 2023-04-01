import React,{ useEffect, useState} from 'react'
import './logStyles.css'
import {Link} from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase-config';
// import validator from "validator";

function Register() {
  const [registerMail,setRegisterMail]=useState("");
  const [registerPass,setRegisterPass]=useState("");
  const [confirmPass,setConfirmPass]=useState("");
  const [user,setUser]=useState({})
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(false)

  // const validateEmail = (e) => {
  //   var email = e.target.value;

  //   (validator.isEmail(email))? 
  //     (setMessage("Enter Your Credentials:"))
  //    :(setMessage("Please, enter valid Email!"))

  // }

  const Register =async (e)=>{
    e.preventDefault()

    if(registerPass!==confirmPass){
      return setError("Passwords do not match")
    }
    try{
    setError("")
    setLoading(true)
    await createUserWithEmailAndPassword(auth,registerMail,registerPass);
    return alert("registration successful")
    
    }
    catch(error){
      setError("Failed to create an account")
    }
    
     setLoading(false)

     

  }
  
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(currentUser=>{
      setUser(currentUser)
      
    })

    return unsubscribe
  },[])
 
  console.log(user)
  return (
  
	<div className='log full-screen'>
   
		<form onSubmit={Register}>
       
        <div className="headingsContainer">
			    <h2>Register here</h2>
          <br></br>
          {error && <h2 style={{textAlign:'left',color:'red'}}>{error}</h2>}
          
            
        </div>
       
        
        <div className="mainContainer">
            <input type="text" placeholder="Enter your email" name="username" onChange={e=>{setRegisterMail(e.target.value)}} required />
            <br /><br />
            <input type="password" placeholder="Set Password" name="pswrd1" onChange={e=>{setRegisterPass(e.target.value)}} required />  
            <input type="password" placeholder="Confirm Password" name="pswrd2" onChange={e=>{setConfirmPass(e.target.value)}} required />  
            <br/><br/>     
            <button type='submit' disabled={loading}>Submit Registration</button>
			      <br /><br />
            {/* <input value={message} style={{width:'fit-content'}}readOnly/> */}
            <Link to="/" style={{color:'white',fontFamily:'Gill Sans MT',fontSize:'x-large'}}>Back To Login</Link>

        </div>
      </form>
     
      
	</div>	
    )
}

export default Register