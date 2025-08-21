// RestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  // ✅ Find the itemCards (menu items)
  const itemSection = regularCards.find(
    (c) => c.card?.card?.itemCards
  )?.card?.card;

  const { itemCards, title } = itemSection || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>Rating: {avgRating} stars</h4>
      <h2>{title}</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.defaultPrice || item.card.info.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;