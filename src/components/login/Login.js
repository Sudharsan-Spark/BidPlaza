import React,{useState} from 'react'
import './logStyles.css'
import {Link,useNavigate} from "react-router-dom"
import { auth } from '../api/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';


function Login({setName}) {
  const navigate=useNavigate()
  const [loginMail,setLoginMail]=useState("");
  const [loginPass,setLoginPass]=useState("");
  // const [isValid,setIsValid]=useState(false);

  const login =async (e)=>{
    e.preventDefault()
    
    try{
    await signInWithEmailAndPassword(auth,loginMail,loginPass)
    return navigate("/home")

    // setIsValid(true)
    // console.log(user)

    }
    catch(error){
      alert("User doesn't exist")
      console.log(error.message)

      // alert("User doesn't exist")
    }

    // if(isValid===true){
    //   return navigate("/home")
    // }
    // finally{
    //   isValid? navigate('/home'):redirect('/')
    // }
    
      
  }
 

  
  
  const changeHandler=(e)=>{
	setName(e.target.value)
  }
  return (
	
	<div className='log full-screen'>
		
		
		<form>
       
        <div className="headingsContainer">
			<h2>Welcome to BidPlaza</h2>
            <h3>Sign in</h3>
        </div>

        
        <div className="mainContainer">
		  
            <input type="text" placeholder="Nickname" name="nickname" onChange={changeHandler}required/>
            <br /><br />
            <input type="text" placeholder="User Mail" name="userMail"  onChange={e=>setLoginMail(e.target.value)} required/>
            <br></br>
            <input type="password" placeholder="Password" name="pswrd" onChange={e=>setLoginPass(e.target.value)} required/>  

            <div className="subcontainer">
                <label>
                  <input type="checkbox"  name="remember" /> Remember me
                </label>
                <p className="forgotpsd"> <Link to="/passReset">Forgot Password?</Link></p>
            </div>


           
            <button type='submit' onClick={login}>Login</button>
			<p style={{textAlign:'center'}}>Not a member? <Link to="/register" style={{color:'skyblue'}}>Register here</Link></p>
			

        </div>
		
      
      </form>
	  
	  
	  
	</div>

	

	
    )
}

export default Login