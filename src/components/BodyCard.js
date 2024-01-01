import restauentList from "../Utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card,{PrmotedCard} from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlinesStatus";

const BodyCard = () => {

  const [serachText,setsearchText]=useState("");

  const [FilterRestauentList, setFilterRestauentList] = useState([]);
  const [RestauentList, setRestauentList] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestauentList(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilterRestauentList(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

  const Promoted=PrmotedCard(Card);
  const status=useOnlineStatus();

  if(status===false) return(<h1>Hi your are offline. Please check your internet !!</h1>)


  if(RestauentList.length === 0)
//   {
//     return <h1>Loading....</h1>
//   }
  {
    return <Shimmer></Shimmer>
  }

  return (
    <div className="">
      <div className="flex">
        <div className="flex m-2 p-1">
          <input  className="border border-black" type="text" value={serachText} onChange={()=>setsearchText(event.target.value)} ></input>
  
          <button className=" border border-gray-500 ml-1 px-3 rounded-md h-8 bg-gray-200" onClick={() => {
          const temp=RestauentList.filter(
            (x) => x.info.name.toLowerCase().includes(serachText.toLowerCase())
          );
          setFilterRestauentList(temp)
            }}>search</button>
        </div>
        <div className="flex m-2 p-1">
          <button
            className=" border border-gray-500 ml-1 px-3 rounded-md h-8 bg-gray-200"
            onClick={() => {
              const temp = RestauentList.filter(
                (x) => x.info.avgRatingString > 4
              );
              setRestauentList(temp);
            }}
          >
            Filer for 4 star Rest
          </button>
        </div>
      </div>
      <div className="flex flex-wrap"> 

          {FilterRestauentList.map((rest) => (
            <Link  key={rest.info.id}  to={"/restaurent/"+rest.info.id}>
              {rest.info.isOpen?<Promoted restData={rest}>{}</Promoted>: <Card restData={rest}></Card>}
              {console.log(rest.info.isOpen)}
           
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BodyCard;
