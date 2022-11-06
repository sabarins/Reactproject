import React from 'react';
import { useState,useEffect } from 'react';
import lion from './image/lion.jpg';
import flower from './image/flower.jpg'
import flower2 from './image/flower2.jpg'
import pic from './image/pic.jpg'


function ChildComp()
{
   
    return(

        <div className=''>
            <h1>This is Child Component</h1>
            <img src={lion} width="200px"></img>
            <p>This picture is Lion.</p>
            <img src={flower} width="200px"></img>
            <p>This picture is Flower.</p>
            <img src={flower2} width="200px"></img>
            <p>This picture is Flower2.</p>
            <img src={pic} width="200px"></img>
            <p>This picture is Nice Road.</p>


        </div>

    )
    
    
}


export function ParentComp()
{
    return(
        <div className=''>
            <h1>This is Parent Component</h1>
            <ChildComp />
        </div>
    )
}


