import React from 'react';
import { useState,useEffect } from 'react';
import './Demo.css';
import search_icon from './search_icon.png';
function Demo(props)
{

    function changesomething()
    {
        setdata("Sabari");
    }
   let [data,setdata] = useState("tr");
   useEffect(function()
   {
     console.log("Rendered");
   
   
     return function()
     {
         console.log("unmounted");
     }
   },[])
    return(
  
      // <ParentComp firstname="sabari"/>
                <div className="header">
                <button onClick={changesomething}>Add</button>
                <p>{data}</p>
                <p>{props.first}</p>
              </div>
      );
    

{/*             
            <div className="title">
               <div className="text">amazon<span>.in</span></div>
            </div>
            <div className="textbox">
                <input type="text" className="input"></input>
            </div>
            <button className="icon_btn">Search</button>
            <div className="options">
            <div className="option1">
                <span>Hello, </span>
                <span>Sign in</span>
            </div>
            <div className="option2">
                <span>Account & Lists</span>
            </div>
            </div>
            <div>
                <h1 style={{color:"white"}}>Welcome {name}</h1>
               <button onClick={changesomething}>Change</button>
           </div>
           <div>
            <input type="text" value={name}></input>
            </div> */}
     
    
}

export default Demo;