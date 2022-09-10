import React, {useEffect, useState} from "react";
import "./styles.css";
import Array from "./dictionary";


function Header(){
    const [dig,setDig]=useState("");
    const [no,setNo]=useState(10);
    
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
        console.log(text)
    }}
    setDig(text)
}

  
    
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
    <div className="area">
    <form>
    <textarea className="area" type="text" placeholder={dig}/>
    </form>
    </div> 
     </>
    );
}
export default Header;

