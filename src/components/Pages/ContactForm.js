import React from 'react'
import './Styles/contactStyles.css'
import { useNavigate } from 'react-router-dom'

function ContactForm() {
  const navigate=useNavigate()
  const formNavigation=(e)=>{
    e.preventDefault()
    alert("Thanks for reaching us. Our executives will contact with you soon. Check your mail for further updates")
    navigate("/home")


  }
  return (
    <div className='contact-bg full-screen'>
        <h3 className='contact'>Contact Form</h3>

        <div className="container">
              <form onSubmit={formNavigation}>
                     <label for="fname">First Name</label>
                     <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>

                     <label for="lname">Last Name</label>
                     <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
              

                     <label for="country">Country</label>
                     <select id="country" name="country">
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="russia">Russia</option>
                        <option value="usa">USA</option>
                     </select>
              
                     <label for="subject">Subject</label>
                     <textarea id="subject" name="subject" placeholder="Tell us your issue..."  required></textarea>

                     <input type="submit" value="Submit" />
              </form>
        </div>
    </div>
    

    
  )
}

export default ContactForm