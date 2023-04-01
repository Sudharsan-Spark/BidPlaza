import React,{useState,useCallback,useEffect} from 'react'
import './Styles/auctionStyles.css'
import AuctionNavBar from './AuctionNavBar'
import eagleJug from './Images/Eagle_jug.jpg'
import goldKettle from './Images/kettle gold.jpg'
import warHelmet from './Images/war_helmet.png'
import clock from './Images/old_hand_clock.jpg'
import axe from './Images/axe.png'
import mask from './Images/ancient_mask.jpg'
import Modal from "react-modal";
import useRazorpay from "react-razorpay";

Modal.setAppElement("#root");

function AuctionPage1() {
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

      const paymentHandler1=()=>{
        return val1

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

        <h1 className='auctionTopic'><b>Artifacts</b></h1>
        <button className='buy-button' onClick={toggleModal7} style={{position:'absolute',right:'10px',backgroundColor:'#674188',width:'fit-content',height:'fit-content'}}><b>Buy Items</b></button>
        { display && <Modal
        dialogueClassName="my-modal"
        isOpen={isOpen7}
        onRequestClose={toggleModal7}
        contentLabel="My dialog"
        >
        <div>
           <button className='buy-button' onClick={handlePayment1}>Buy Eagle Jug</button><br/>
           <button className='buy-button' onClick={handlePayment2}>Buy War Helmet</button><br/>
           <button className='buy-button' onClick={handlePayment3}>Buy Antique Clock</button><br/>
           <button className='buy-button' onClick={handlePayment4}>Buy Gold Kettle</button><br/>
           <button className='buy-button' onClick={handlePayment5}>Buy Ancient War Axe</button><br/>
           <button className='buy-button' onClick={handlePayment6}>Buy Medeival Mask</button>
        </div>
        <br/>
        <button className="descriptionButton" onClick={toggleModal7} style={{backgroundColor:'#850000'}}>Close</button>
        </Modal>}
        <br/>
        <br/>
        <br/><br/>
          <div className='arrangementColumn'>
            <div className='arrangementRow'>
                <div className="card2">
                    <img src={eagleJug} alt="Eagle Jug"/>
                    
                    <div className="container">
                        <h3><b>Eagle Jug</b></h3> 
                        <button onClick={toggleModal1}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen1}
                            onRequestClose={toggleModal1}
                            contentLabel="My dialog"
                        >
                            <div>
                            This stunning eagle jug is a true work of art, crafted with exceptional attention to detail.<br/>
                            Made from high-quality materials, it features intricate designs and a striking eagle-shaped handle.<br/>
                            A unique and rare piece, this jug is likely to have been used in ceremonial or decorative settings.<br/>
                            A valuable addition to any collection of antique pottery or decorative objects, this eagle jug is sure to impress.
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
                    <img src={warHelmet} alt="War Helmet"/>
                    <div className="container">
                        <h3><b>War Helmet</b></h3> 
                        <button onClick={toggleModal2}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen2}
                            onRequestClose={toggleModal2}
                            contentLabel="My dialog"
                        >
                            <div>
                            This war helmet is a powerful symbol of strength and protection, crafted for battle and worn by warriors of old.<br/>
                            Made from durable materials, it features a sturdy design and intricate detailing, offering both function and aesthetic appeal.<br/>
                            A rare and impressive find, this war helmet is likely to have been owned by a respected and skilled warrior.<br/>
                            A valuable addition to any collection of historical armor or military memorabilia, this war helmet is sure to capture the attention of collectors.
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
                    <img src={clock} alt="Antique Clock"/>
                    <div className="container">
                        <h3><b>Antique Clock</b></h3> 
                        <button onClick={toggleModal3}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen3}
                            onRequestClose={toggleModal3}
                            contentLabel="My dialog"
                        >
                            <div>
                            This antique hand clock is a true masterpiece of traditional timekeeping.<br/>
                            Crafted from the finest materials, it features intricate detailing and a classic design that exudes elegance and refinement.<br/>
                            A rare and unique find, this hand clock is likely to have been owned by a wealthy and influential figure in its time.<br/>
                            A valuable addition to any collection of antique timepieces or decorative objects, this old hand clock is sure to impress.
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
                    <img src={goldKettle} alt="Gold Kettle"/>
                    <div className="container">
                        <h3><b>Gold Kettle</b></h3> 
                        <button onClick={toggleModal4}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen4}
                            onRequestClose={toggleModal4}
                            contentLabel="My dialog"
                        >
                            <div>
                            This exquisite gold kettle is a true statement piece, crafted from the finest materials.<br/>
                            Adorned with intricate designs and embellishments, it is a testament to the skill and artistry of the maker.<br/>
                            Likely to have been owned by a wealthy and influential figure, this kettle exudes luxury and opulence.<br/>
                            A rare and valuable addition to any collection of fine objects, this gold kettle is sure to impress.
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
                    <img src={axe} alt="War Axe"/>
                    <div className="container">
                        <h3><b>Ancient War Axe</b></h3> 
                        <button onClick={toggleModal5}>Description</button>
                        <Modal
                            dialogueclassName="my-modal"
                            isOpen={isOpen5}
                            onRequestClose={toggleModal5}
                            contentLabel="Axe"
                        >
                            <div>
                            Powerful and imposing, this antique axe is a striking piece of history.<br/>
                            Crafted from high-quality materials, it features a sharp blade and a sturdy wooden handle.<br/>
                            Believed to have been wielded by warriors of old, this axe exudes strength and resilience.<br/>
                            A must-have for collectors of historical weaponry, this antique axe is a unique and formidable addition to any collection.<br/>
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
                    <img src={mask} alt="Medeival Mask"/>
                    <div className="container">
                        <h3><b>Medeival Mask</b></h3> 
                        <button onClick={toggleModal6}>Description</button>
                        <Modal
                            dialogueClassName="my-modal"
                            isOpen={isOpen6}
                            onRequestClose={toggleModal6}
                            contentLabel="My dialog"
                        >
                            <div>
                            Rare and mysterious ancient mask, believed to have been crafted over a thousand years ago.<br/>
                            Intricately carved from a single piece of wood, featuring intricate details and designs.<br/>
                            Thought to have been used in sacred rituals or ceremonies, adding to its mystical allure.<br/>
                            A true collector's item, this mask is a unique and valuable piece of history, waiting to be treasured.
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

export default AuctionPage1
