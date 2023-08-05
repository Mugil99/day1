import React, { useState } from "react";
const ButtonDisable=()=>{
    const[num,setNum]=useState(0);
    function handleClick(e){
        // if(num==3){
        //     e.target.disabled=true;
        //     return
        //  }
       //setNum(num+1); if we use this because of async nature of setNum 
       //button is disabled on the fourth click
       
       //for this purpose avoid using DOM 

       setNum(num+1)
    }
    return(
        <div>
            <h1>Disabling button at third click</h1>
            <button onClick={handleClick} disabled={num===3}>Click</button>
            {num}
        </div>
    )
}
export default ButtonDisable;