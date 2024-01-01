
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauranmenu from "../Utils/useRestuarantmenu";
import Category from "./Category"

const RestaurantMenu = () => {
  
  const {restid}=useParams();

  const restInfo=useRestauranmenu(restid);
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const Categories=restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=>{
    return x.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

  })
  console.log(Categories)

  return (
    <div>
      <h1 className="text-center font-bold">{name}</h1>
      <Category Categories={Categories} ></Category>
    </div>
  );
};

export default RestaurantMenu;
