import React, { useEffect, useState } from "react";
const CurrentTime=()=>{
    const [time,setTime]=useState(new Date().toLocaleTimeString([],{hour12:false}));
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString([],{hour12:false})) //If you provide an empty array ([]) as the first argument, 
                                                                        //it will use the default locale of the user's environment.
                                                                        //giving other country affets formating ('ar-EG')
        },1000)
        return()=>{
            clearInterval(interval);
        }
    })
    console.log(time);
    return(
        <div>
            {time}
        </div>
    )
}
export default CurrentTime;
//using inbuilt 24 hrs format...