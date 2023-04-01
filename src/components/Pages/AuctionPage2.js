import React,{useState,useCallback,useEffect} from 'react'
import './Styles/auctionStyles.css'
import AuctionNavBar from './AuctionNavBar'
import egyptKnife from './Images/middle_age_sword.jpg'
import arabianKnife from './Images/arabian_knife.jpg'
import indianSword from './Images/indian_swords.jpg'
import samuraiSword from './Images/japanese_samuari_sword.jpg'
import luxuryKnife from './Images/Luxury knife.jpg'
import britishSword from './Images/british_swords.jpg'
import Modal from "react-modal";
import useRazorpay from 'react-razorpay'

Modal.setAppElement("#root");

function AuctionPage2() {
    const [time,setTime]=useState(0)

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);

    const [val1,setVal1]=useState("100")
    const [val2,setVal2]=useState("100")
    const [val3,setVal3]=useState("100")
    const [val4,setVal4]=useState("100")
    const [val5,setVal5]=useState("100")
    const [val6,setVal6]=useState("100")

    const [dummy1,setDummy1]=useState("0")
    const [dummy2,setDummy2]=useState("0")
    const [dummy3,setDummy3]=useState("0")
    const [dummy4,setDummy4]=useState("0")
    const [dummy5,setDummy5]=useState("0")
    const [dummy6,setDummy6]=useState("0")

    const [display,setDisplay]=useState(false)

    const Razorpay1 = useRazorpay();
    const Razorpay2 = useRazorpay();
    const Razorpay3 = useRazorpay();
    const Razorpay4 = useRazorpay();
    const Razorpay5 = useRazorpay();
    const Razorpay6 = useRazorpay();
    
   
    const changeHandler1=(e)=>{  
            setDummy1(e.target.value)
    }
    const changeHandler2=(e)=>{  
        setDummy2(e.target.value)
    }
    const changeHandler3=(e)=>{  
        setDummy3(e.target.value)
    }
    const changeHandler4=(e)=>{  
        setDummy4(e.target.value)
    }
    const changeHandler5=(e)=>{  
        setDummy5(e.target.value)
    }
    const changeHandler6=(e)=>{  
        setDummy6(e.target.value)
    }
    
    
    const clickHandler1=()=>{
    if(parseInt(dummy1)>parseInt(val1) && time>0){
        setVal1(dummy1)
    }  
    else if(parseInt(dummy1)<parseInt(val1) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy1)===parseInt(val1) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    }
    
    }

    const clickHandler2=()=>{
    if(parseInt(dummy2)>parseInt(val2) && time>0){
        setVal2(dummy2)
    }  
    else if(parseInt(dummy2)<parseInt(val2) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy2)===parseInt(val2) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    }
    }

    const clickHandler3=()=>{
    if(parseInt(dummy3)>parseInt(val3) && time>0){
        setVal3(dummy3)
    }  
    else if(parseInt(dummy3)<parseInt(val3) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy3)===parseInt(val3) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    }
    }

    const clickHandler4=()=>{
    if(parseInt(dummy4)>parseInt(val4) && time>0){
        setVal4(dummy4)
    } 
    else if(parseInt(dummy4)<parseInt(val4) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy4)===parseInt(val4) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    } 

    }

    const clickHandler5=()=>{
    if(parseInt(dummy5)>parseInt(val5) && time>0){
        setVal5(dummy5)
    }  
    else if(parseInt(dummy5)<parseInt(val5) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy5)===parseInt(val5) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    }
    }

    const clickHandler6=()=>{
    if(parseInt(dummy6)>parseInt(val6) && time>0){
        setVal6(dummy6)
    } 
    else if(parseInt(dummy6)<parseInt(val6) && time>0){
        alert("You can't place a bid value less than the current bid value. Please place a bid value greater than current bid")
    }
    else if(parseInt(dummy6)===parseInt(val6) && time>0){
        alert("You can't place a bid value equal to the current bid value. Please place a bid value greater than current bid")
    }
    else if(time<0){
        alert("Sorry! Auction has already been ended")
    }
    }

    function toggleModal1() {
      setIsOpen1(!isOpen1);
    }
    function toggleModal2() {
        setIsOpen2(!isOpen2);
      }
    function toggleModal3() {
        setIsOpen3(!isOpen3);
      }

    function toggleModal4() {
        setIsOpen4(!isOpen4);
      }
    function toggleModal5() {
        setIsOpen5(!isOpen5);
      }
    function toggleModal6() {
        setIsOpen6(!isOpen6);
      }

    function toggleModal7() {
        setIsOpen7(!isOpen7);
      }

      const handlePayment1 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val1*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay1(options);
        rzpay.open();
      }, [Razorpay1]);

      const handlePayment2 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val2*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay2(options);
        rzpay.open();
      }, [Razorpay2]);

      const handlePayment3 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val3*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay3(options);
        rzpay.open();
      }, [Razorpay3]);

      const handlePayment4 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val4*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay4(options);
        rzpay.open();
      }, [Razorpay4]);
    
      const handlePayment5 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val5*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay5(options);
        rzpay.open();
      }, [Razorpay5]);

      const handlePayment6 = useCallback(async() => {
    
        const options={
          key: "rzp_test_gIqb5BULLwPfgd",
          amount: val6*100,
          currency: "INR",
          name: "BidPlaza",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/17xEkBh9293ZN0EjwF6BjYDoUeoT-euVU/view?usp=drivesdk ",
          handler: (res) => {
            console.log(res.razorpay_payment_id);
          },
          prefill: {
            name: "Sudharsan K",
            email: "sudharsankamalakkannan@gmail.com",
            contact: "9092886103",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay6(options);
        rzpay.open();
      }, [Razorpay6]);

      useEffect(()=>{
        if(time<0){
            setDisplay(true)
        }
      },[time])

        
    
   

  return (
    <div>
        <AuctionNavBar setTime={setTime}/>
        <br/>

        <h1 className='auctionTopic'><b>Blades</b></h1>
        <button className='buy-button' onClick={toggleModal7} style={{position:'absolute',right:'10px',backgroundColor:'#674188',width:'fit-content',height:'fit-content'}}><b>Buy Items</b></button>
        { display && <Modal
        dialogueClassName="my-modal"
        isOpen={isOpen7}
        onRequestClose={toggleModal7}
        contentLabel="My dialog" 
        >
        <div>
           <button className='buy-button' onClick={handlePayment1}>Buy Egyptian Knife</button><br/>
           <button className='buy-button' onClick={handlePayment2}>Buy Luxury Knife</button><br/>
           <button className='buy-button' onClick={handlePayment3}>Buy Indian Sword</button><br/>
           <button className='buy-button' onClick={handlePayment4}>Buy Samurai Sword</button><br/>
           <button className='buy-button' onClick={handlePayment5}>Buy Arabian Knife</button><br/>
           <button className='buy-button' onClick={handlePayment6}>Buy British Swords</button>
        </div>
        <br/>
        <button className="descriptionButton" onClick={toggleModal7} style={{backgroundColor:'#850000'}}>Close</button>
        </Modal> }
        <br/>
        <br/>
        <br/><br/>
          <div className='arrangementColumn'>
            <div className='arrangementRow'>
                <div className="card2">
                    <img src={egyptKnife} alt="Egyptian Knife"/>
                    
                    <div className="container">
                        <h3><b>Egyptian Knife</b></h3> 
                        <button onClick={toggleModal1}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen1}
                            onRequestClose={toggleModal1}
                            contentLabel="My dialog"
                        >
                            <div>
                              This authentic Egyptian sword is a remarkable piece of history, dating back to a time of knights and chivalry.<br/>
                              Crafted from high-quality materials, it features a sharp blade and a sturdy hilt, designed for maximum impact in battle.<br/>
                              A symbol of power and prestige, this sword was likely owned by a noble or warrior of great standing.<br/>
                              A rare and valuable addition to any collection of historical weaponry, this medieval sword is sure to impress.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal1}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val1} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler1}/>  
                        <button onClick={clickHandler1}>Submit</button>            
                    </div>
                </div>
                <div className="card2">
                    <img src={luxuryKnife} alt="Luxury Knife"/>
                    <div className="container">
                        <h3><b>Luxury Knife</b></h3> 
                        <button onClick={toggleModal2}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen2}
                            onRequestClose={toggleModal2}
                            contentLabel="My dialog"
                        >
                            <div>
                               This luxury knife is the epitome of elegance and refinement, made from the finest materials.<br/>
                               Expertly crafted by skilled artisans, it features a sharp blade and a stunning handle adorned with precious gems or intricate detailing.<br/>
                               A versatile piece of cutlery, this knife is perfect for any formal dining occasion or as a decorative item.<br/>
                               A rare and unique find, this luxury knife is sure to impress any collector of high-end cutlery or decorative objects.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal2}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val2} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler2}/>  
                        <button onClick={clickHandler2}>Submit</button>                  
                    </div>
                </div>
            </div>
            <div className='arrangementRow'>
                <div className="card2">
                    <img src={indianSword} alt="Indian Sword"/>
                    <div className="container">
                        <h3><b>Indian Sword</b></h3> 
                        <button onClick={toggleModal3}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen3}
                            onRequestClose={toggleModal3}
                            contentLabel="My dialog"
                        >
                            <div>
                                This pair of Indian swords is a magnificent example of traditional craftsmanship and design.<br/>
                                Expertly forged using time-honored techniques, each sword boasts a sharp blade and ornate hilt.<br/>
                                With intricate detailing and embellishments, these swords were likely owned by high-ranking members of Indian society.<br/>
                                A rare and impressive find, these Indian swords are sure to be a prized possession for any collector of historical weaponry.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal3}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val3} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler3}/>  
                        <button onClick={clickHandler3}>Submit</button>                  
                    </div>
                </div>
                <div className="card2">
                    <img src={samuraiSword} alt="Samurai Sword"/>
                    <div className="container">
                        <h3><b>Samurai Sword</b></h3> 
                        <button onClick={toggleModal4}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen4}
                            onRequestClose={toggleModal4}
                            contentLabel="My dialog"
                        >
                            <div>
                               This authentic Japanese samurai sword is a masterpiece of traditional craftsmanship and design.<br/>
                               Forged by a skilled swordsmith, it features a sharp blade and a stunning hilt adorned with intricate details.<br/>
                               A true symbol of Japanese culture and history, this sword is likely to have been owned by a samurai warrior or noble.<br/>
                               A highly coveted item among collectors of historical weaponry, this Japanese samurai sword is a rare and valuable addition to anycollection.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal4}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val4} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler4}/>  
                        <button onClick={clickHandler4}>Submit</button>                    
                    </div>
                </div>
            </div>
            <div className='arrangementRow'>
                <div className="card2">
                    <img src={arabianKnife} alt="Arabian Knife"/>
                    <div className="container">
                        <h3><b>Arabian Knife</b></h3> 
                        <button onClick={toggleModal5}>Description</button>
                        <Modal
                            dialogueclassName="my-modal"
                            isOpen={isOpen5}
                            onRequestClose={toggleModal5}
                            contentLabel="Axe"
                        >
                            <div>
                                Exquisitely crafted Arabian knife, adorned with intricate designs and embellishments.<br/>
                                Forged by skilled artisans using traditional techniques passed down through generations.<br/>
                                Featuring a razor-sharp blade and a handle made from premium materials, this knife is both beautiful and functional.<br/>
                                A true testament to Arabian craftsmanship, this knife is a rare and valuable addition to any collection.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal5}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val5} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler5}/>  
                        <button onClick={clickHandler5}>Submit</button>                   
                    </div>
                </div>
                <div className="card2">
                    <img src={britishSword} alt="British Sword"/>
                    <div className="container">
                        <h3><b>British Swords (3pcs.)</b></h3> 
                        <button onClick={toggleModal6}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen6}
                            onRequestClose={toggleModal6}
                            contentLabel="My dialog"
                        >
                            <div>
                                Elegant and refined, this pair of British swords exudes sophistication and class.<br/>
                                Crafted by master swordsmiths using traditional techniques, they are a testament to the skill and artistry of British craftsmen.<br/>
                                Featuring intricate designs and embellishments, these swords were likely owned by nobles or high-ranking officials.<br/>
                                A rare and exquisite find, these British swords are sure to impress any collector of fine weaponry.
                            </div>
                            <br/>
                            <button className="descriptionButton" onClick={toggleModal6}>Close Description</button>
                        </Modal>
                        <h4><u>Current Bid (₹)</u></h4>
                        <input className="auction-cip" value={val6} readOnly/>
                        <h4><u>Place Bid (₹)</u></h4>
                        <input className='auction-pip' onChange={changeHandler6}/>  
                        <button onClick={clickHandler6}>Submit</button>                    
                    </div>
                </div>
            </div>
          </div>
          <br/><br/>
    </div>
  )
}

export default AuctionPage2
