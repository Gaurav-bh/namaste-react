
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauranmenu from "../Utils/useRestuarantmenu";

const RestaurantMenu = () => {
  
  const {restid}=useParams();

  const restInfo=useRestauranmenu(restid);
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
