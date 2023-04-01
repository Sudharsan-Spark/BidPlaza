import {useEffect,useRef,useState} from 'react'

const formatTime=(time)=>{
    let min=Math.floor(time/60)
    let sec=Math.floor(time-min*60)

    if(min<=10) min ='0'+min;
    if(sec<=10) sec ='0'+sec;
    return min + ':' + sec

}

export default function Timer({seconds,setCd}) {
  const [countdown,setCountdown]=useState(seconds)
  const timerId=useRef()
  setCd(countdown)
  useEffect(()=>{
    timerId.current=setInterval(()=>{
        setCountdown(prev=>prev-1)
    },1000)
    return ()=>clearInterval(timerId.current)
  },[])

//    useEffect(()=>{
//     if (countdown<=0){
//         clearInterval(timerId.current)
//         alert("END")
//     }
//    },[countdown])


  return (
    <div>{formatTime(countdown)}</div>
  )
}
