// RestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;

  // ✅ Find restaurant info card dynamically
  const infoCard = resInfo?.cards?.find(
    (c) => c.card?.card?.info
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage, avgRating } = infoCard || {};

  // ✅ Find the REGULAR section
  const regularCards =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // ✅ Find the itemCards (menu items)
  const itemSection = regularCards.find(
    (c) => c.card?.card?.itemCards
  )?.card?.card;

  const { itemCards, title } = itemSection || {};

  return (
    <div>
      <h1 className="font-bold my-10 text-2xl text-center">{name}</h1>
      <h3 className="text-center">{cuisines?.join(", ")}</h3>

      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} showIndex={index === showIndex} setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
      ))}

    </div>
  );
};

export default RestaurantMenu;