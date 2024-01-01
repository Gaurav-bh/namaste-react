import { useEffect ,useState} from "react";
import { MENU_API } from "./Constants";

const useRestauranmenu= (resId)=>{
    const [restInfo, setrestInfo] = useState(null);
    

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData= async ()=>{

        const data= await fetch(MENU_API+resId);
        const json= await data.json();
        setrestInfo(json)
    }
    console.log(restInfo)
    return restInfo
}
export default useRestauranmenu