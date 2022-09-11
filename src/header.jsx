import React, {useEffect, useState} from "react";
import "./styles.css";
import Array from "./dictionary";


function Header(){
    const [dig,setDig]=useState("");
    const [no,setNo]=useState(10);
    const [score,setscore]=useState(0)
    const [index,setindex]=useState(0);
    
    let text=""
    function random(num)
    {
    setNo(num)
    console.log(no)
    for(var i=0;i<no;i++){
      var ind=Math.floor(Math.random()*Array.length);
      if(i===0){
        text=Array[ind];
      }
      else{
        text=text+" "+Array[ind];
        
    }}
    setDig(text)
}
   function countScore(val){
    var typetext="";
    for(let k=0;k<=index;k++) {
      typetext=typetext+dig[k]
      console.log(typetext)
      ;}
      if (val.target.value==typetext){setscore(score+1);
        setindex(index+1);
      }
    }
    
   
  useEffect(()=>{
    random(10)
  },[])

  
    
    return(
     <>
     
     <div className="nav-settings">
        <a href="https://ibb.co/nzKYJ2n"><img src="https://i.ibb.co/9sd15XV/logo.png" alt="logo" border="0" width="60px" className="logo-settings"/></a>
        <h1>Typing...</h1>
        
        <div className="mode">
         <p>Words:
         <a  className="design-mode" onClick={function(e) {random(10)}}>10</a>
         <a  className="design-mode" onClick={function(e) {random(15)}}>15</a>
         <a className="design-mode"  onClick={function(e) {random(20)}}>20</a>
         <a  className="design-mode" onClick={function(e) {random(30)}}>30</a>
         <a  className="design-mode" onClick={function(e) {random(60)}}>60</a></p>
        </div> 
        </div>
        <div className="score">Score:{score}</div> 
    <div className="area">
    <form placeholder="Start typing here">
    <textarea name="typearea" className="typearea" type="text" onChange={countScore} placeholder="Start typing here"/>
    </form>
    <form>
    <textarea className="area" type="text" placeholder={dig}/>
    </form>
    </div> 
     </>
    );
}
export default Header;

