import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineState,setonlinestate]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestate(false)
        });
        
        window.addEventListener("online",()=>{
            setonlinestate(true)
        });


    },[])

    

    return onlineState;
}
export default useOnlineStatus;