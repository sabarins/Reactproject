import React from 'react';
import { useState,useEffect } from 'react';
import './fetch.css';
import leftimg from './image/left.png';
import rightimg from './image/right.png';


function Data()
{


    let [data,setData] = useState([]);

    useEffect(
        function()
        {
            fetch("https://stat.dinamalar.com/sample_json.php")
            .then((res)=>res.json())
            .then((response)=>{
                setData(response);
                console.log(response);
            })
            console.log("working");
        },[])

        // let [lslide,setLslide] = useState(0);
        

       const leftslide = ()=>
       {
        var sel = document.querySelector('.star');
        var width = sel.clientWidth;
        sel.scrollLeft = sel.scrollLeft - width;
        console.log(width);
       }
        const rightslide = ()=>
        {
            var sel = document.querySelector('.star');
        var width = sel.clientWidth;
        sel.scrollLeft = sel.scrollLeft + width;
        console.log(sel);
        }
    console.log(data.items);
    return(
        <div className='container'>
            <div className='header'>
                <h2 style={{color:'white',textIndent:'30px'}}>D I N A M A L A R </h2>
                <p style={{textIndent:'30px'}}>No.1 Tamil news website in the world</p>
            </div>
            <div className='users'>
                {
                   // fetching array of object using keys
                   Object.keys(data).map((ele,ind)=>
                   {
                    console.log(data[ele]);
                    return(
                        <div className='bodystart'>
                            <h2>Today News</h2>
                            <div className="slide">
                                <div className="slidehead">
                                    <h3>TOP STORIES</h3>
                                    <div className="slidebtns">
                                        <img src={leftimg}  onClick={leftslide}  width="30px" style={{backgroundColor:"light-grey",borderRadius:"50%",height:"30px",cursor:"pointer",marginRight:"30px"}}></img>
                                        <img src={rightimg} onClick={rightslide}  width="30px" style={{backgroundColor:"light-grey",borderRadius:"50%",height:"30px",cursor:"pointer"}}></img>
                                    </div>
                                </div>
                                <div className="slide-body">
                                <div className='box'>
                                {
                                    // From the fetching array of object, retrieve array values
                                    data[ele].map((el,ind)=>
                                    {
                                        return(
                                            <div className='star' key={ind}>
                                               
                                                <img src={el.StoryImage} width="220px" className='img' height="200px" alt="storyimage"></img>
                                                <p className='content'>{el.title}</p>
                                                <div className="timedis">
                                                    <div className="tim">
                                                        <span style={{color:"blueviolet"}}>{el.pubDate} <span style={{color:"black"}}>| </span><span style={{color:"blueviolet",fontSize:"smaller"}}>{el.categoryDisplay}</span></span>
                                                    </div>
                                                    <div className="cmnts">
                                                        {/* <a href="#"><img src={images} className="cmnimg" width="20%"></img></a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        )
                                    })
                                }
                            </div>
                                </div>
                            </div>
                              {/* will be used  */}
                            {/* <div className='box'>
                                {
                                    // From the fetching array of object, retrieve array values
                                    data[ele].map((el,ind)=>
                                    {
                                        return(
                                            <div className='star'>
                                               
                                                <img src={el.StoryImage} width="350px" className='img' height="200px" alt="storyimage"></img>
                                                <p className='content'>{el.title}</p>
                                                <div className="timedis">
                                                    <div className="tim">
                                                        <span style={{color:"blueviolet"}}>{el.pubDate} <span style={{color:"black"}}>| </span><span style={{color:"blueviolet",fontSize:"smaller"}}>{el.categoryDisplay}</span></span>
                                                    </div>
                                                    <div className="cmnts">
                                                        <a href="#"><img src={images} className="cmnimg" width="20%"></img></a>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        )
                                    })
                                }
                            </div> */}
                           
                            
                        </div>
                    )
                   })
                }
            </div>
        </div>
    )


}

export default Data;