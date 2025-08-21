import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useRestaurantcardData = () => {
    const [listOfRes, setlistOfRes] = useState([]);
    const [filteredList, setfilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        const restaurants =
            json?.data?.cards?.find(
                (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setfilteredList(restaurants);
        setlistOfRes(restaurants);

    }

    return {listOfRes, setlistOfRes, filteredList, setfilteredList};
}

export default useRestaurantcardData;