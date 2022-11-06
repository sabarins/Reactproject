import React from 'react';
import { useState,useEffect } from 'react';


function Product()
{
    let [arrobj,setarrobj] = useState([
        {
            name:"Sabari",
            age:"22",
            address:"Chennai"
        },
        {
            name:"Vijay",
            age:"22",
            address:"Trichy"
        }
    ])

    useEffect(function()
    {
        console.log("Rendered");
    });

    function getdata()
    {
        return(
            <div>
               {arrobj.map(function(ele,index)
                {
                    return(
                        <div>
                            <p>{ele.name}</p>
                        </div>
                    )
                })}
            </div>
        )
        let [apidata,setapidata] = useState(null);
    let [data,setdata] = useState([
        {
            firstname:"Sabari",
            lastname:"s"
        }
    ])
    let tmpdata = {
        firstname:null,
        lastname : null
    };
    return(
        <div>
            <input type="text"  />
            <button onClick={getname}>Get Name from user</button>
            <p>{apidata}</p>
            
        </div>
        
    )
  
    

    function getname()
    {
        
    }
                
         
    }
    return(
        <div>
            
            <button onClick={getdata}>GetData</button>
        </div>
        )
                
            
    

  
}

// export default Product;