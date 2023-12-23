import restauentList from "../Utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
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
    console.log(json?.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setRestauentList(json?.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    setFilterRestauentList(json?.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
  };

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
    <div className="bodycard">
      <div className="filter">
      <div className="bodysearch">
        <input type="text" value={serachText} onChange={()=>setsearchText(event.target.value)} ></input>
  
        <button className="search-btn" onClick={() => {
          const temp=RestauentList.filter(
            (x) => x.info.name.toLowerCase().includes(serachText.toLowerCase())
          );
          setFilterRestauentList(temp)
          }}>search</button>
      </div>
        <button
          className="filter-btn"
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

      {FilterRestauentList.map((rest) => (
        <Link key={rest.info.id}  to={"/restaurent/"+rest.info.id}>
        <Card restData={rest}></Card>
        </Link>
      ))}
    </div>
  );
};

export default BodyCard;
