import React, {useEffect, useState} from "react";
import "./styles.css";
import alot from "./words";


function Header(){

    
    return(
        <div className="nav-settings">
        <a href="https://ibb.co/nzKYJ2n"><img src="https://i.ibb.co/9sd15XV/logo.png" alt="logo" border="0" width="60px" className="logo-settings"/></a>
        <h1>Typing...</h1>
        <div className="mode">
         {/* <p>Words:</p>
         <a  className="design-mode" onClick={function(e) {alot(10)}}>10</a>
         <a  className="design-mode" onClick={function(e) {alot(5)}}>15</a>
         <a className="design-mode"  href="words.jsx">20</a>
         <a  className="design-mode" href="words.jsx">30</a>
         <a  className="design-mode" href="words.jsx">60</a> */}
        </div>
       
     </div>
    );
}
export default Header;
