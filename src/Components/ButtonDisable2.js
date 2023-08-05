import React, { useState } from "react";
const ButtonDisable2=()=>{
    const[num,setNum]=useState(0);
    function handleClick(e){
        setTimeout(()=>{
            setNum(num+1)
        },0)
        if(num==2){
            e.target.disabled=true;
            return
         }
    }
    return(
        <div>
            <h1>Disabling button at third click</h1>
            <button onClick={(e)=>handleClick(e)}>Click</button>
            {num}
        </div>
    )
}
export default ButtonDisable2;