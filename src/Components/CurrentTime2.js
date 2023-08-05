import React, { useEffect, useState } from "react";
const CurrentTime2=()=>{
    const[time,setTime]=useState(null)
    function formatTime(){
        let date = new Date().toLocaleTimeString();
        console.log(date.split(':'));
        var hour=date.split(':')
        console.log(hour[0])
        if(date[date.length-2]=='P' && hour[0]!='12'){
              hour[0]=parseInt(hour[0])+12;
              hour[2]=hour[2].split(" ")[0]
            //   console.log(arr[2])
            var ans=hour.join(':');
            console.log(ans);
            return ans;
        }
        else if(date[date.length-2]=='P' && hour[0]=='12'){
            hour[2]=hour[2].split(" ")[0];
            var ans=hour.join(':');
            return ans;
        }
        else if(date[date.length-2]=='A' && hour[0]!='12'){
            hour[0]='0'+hour[0];
            hour[2]=hour[2].split(" ")[0];
            var ans=hour.join(':');
            return ans;
        }
        else if(date[date.length-2]=='A' && hour[0]=='12'){
            hour[0]='00';
            hour[2]=hour[2].split(" ")[0];
            var ans=hour.join(':');
            return ans;
        }
    }
    useEffect(()=>{
        let interval=setInterval(()=>setTime(formatTime()),1000)
        return()=>{
            clearInterval(interval);
        }
    })
    formatTime()
    return(
        <div>
            {time}
        </div>
    )
}
export default CurrentTime2;
//without uu=sing inbuilt 24hrs format...