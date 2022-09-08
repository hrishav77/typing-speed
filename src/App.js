import React, {useEffect, useState} from "react";
import Words from "./words.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import alot from "./words.jsx";
import "./styles.css";


function App() {


  return (
    <div> 
    <Header/>
    <Words />
    <Footer/>
    </div>

  );
}

export default App;

