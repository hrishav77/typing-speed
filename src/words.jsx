import React from "react";
import Array from "./dictionary";
import   "./styles.css";
import { words } from "./header";

let no=prompt ("how many numbers of words you wanna type")
let dig="";


//  no=mode;
// console.log(no);
function random(no)
{
for(var i=0;i<no;i++){
  var ind=Math.floor(Math.random()*Array.length);
  if(i===0){
    dig=Array[ind];
  }
  else{
    dig=dig+" "+Array[ind];
  }
  
}}
function alot(num){
  
  random(num);
  console.log({dig})
  
  return <div>
  <form>
 
<textarea className="area" type="text" placeholder={dig}/>
  </form>
</div> ;
}
alot(no)
export default alot;
