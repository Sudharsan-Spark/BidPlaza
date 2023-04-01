import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";   

import React,{useState,useEffect} from 'react';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './components/Pages/Home'
import ContactForm from './components/Pages/ContactForm'  
import PasswordReset from './components/login/PasswordReset';
import AuctionPage1 from './components/Pages/AuctionPage1';
import AuctionPage2 from './components/Pages/AuctionPage2';
import {auth} from './components/api/firebase-config';
import PrivateRoute from './components/login/PrivateRoute';



function App() {
  document.title="BidPlaza"  
  const [name,setName]=useState("user") 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (  
    <div className="App">  
       <>     
          <Router>
            <Routes>
                <Route path="/" element={<Login setName={setName}/>} />
                <Route path="/register" element={<Register/>} />
                <Route element={<PrivateRoute authenticated={user!==null}/>}>
                    <Route path="/home" element={<Home name={name} setName={setName}/>} />  
                    <Route path="/contact" element={<ContactForm/>}/>
                    <Route path="/auction1" element={<AuctionPage1/>}/>
                    <Route path="/auction2" element={<AuctionPage2/>}/> 
                </Route>
                <Route path="/passReset" element={<PasswordReset />}/>
            </Routes>
          </Router>
      </>
    </div>
  );
}

export default App;
