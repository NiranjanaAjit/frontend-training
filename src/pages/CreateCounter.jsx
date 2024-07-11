import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

const CreateCounter = () => {

    const[counter,setCounter] = useState(0);
    //no dependency array 
    useEffect(()=> {
        console.log("callback of no dependency array useEffect");
        return ()=>console.log("clean up of no dependency array useEffect")
    })
    //empty dependency array 
    useEffect(()=> {
        console.log("callback of empty dependency array useEffect");
        return ()=>console.log("clean up of empty dependency array useEffect")
    },[])
    //with dependency array 
    useEffect(()=> {
        console.log("callback of dependency array useEffect");
        return ()=>console.log("clean up of dependency array useEffect")
    },[counter])

    const counterRef = useRef(0);
    function increment(){
        setCounter(counter+5)
    }
    function decrement(){
        setCounter(counter-5);
    }
    return <main>
        <h1 style={{marginLeft:"30%",color:"blue"}}>{counter}</h1>
        <button style={{border:"green", color:"green",backgroundColor:"lightgreen",borderStyle:"solid", borderRadius:"50px", margin:"10%", fontSize:"50px", padding: "5%"}} onClick={increment}>+</button>
        
        <button style={{border:"red", color:"red",borderStyle:"solid",backgroundColor:"lightsalmon", borderRadius:"50px", margin:"10%", fontSize:"50px", padding: "5%"}} onClick={decrement}>-</button>
        {/* <button onClick></button> */}
    
    </main>
}

export default CreateCounter;