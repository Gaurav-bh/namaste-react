import restauentList from "../Utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
const BodyCard = () => {
  const [RestauentList, setRestauentList] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json?.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setRestauentList(json?.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
  };
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
        <button
          className="filter-btn"
          onClick={() => {
            const temp = RestauentList.filter(
              (x) => x.info.avgRatingString > 4
            );
            setRestauentList(temp);
          }}
        >
          hello
        </button>
      </div>

      {RestauentList.map((rest) => (
        <Card key={rest.info.id} restData={rest}></Card>
      ))}
    </div>
  );
};

export default BodyCard;
