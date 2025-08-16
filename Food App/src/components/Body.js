import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRes, setlistOfRes] = useState([]);
    const [searchText, setsearchText] = useState("");
    const[filteredList, setfilteredList] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(
                API_URL
            );

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const json = await res.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setfilteredList(restaurants);
            setlistOfRes(restaurants);

        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    return filteredList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredList(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setfilteredList(filteredList)
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredList.map((restaurant, index) => (
                        <RestaurantCard key={index} listOfRes={restaurant} />
                    ))
                }
            </div>
        </div >
    )
}

export default Body;