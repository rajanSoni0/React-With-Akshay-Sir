import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantcardData from "../utils/useRestaurantcardData";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [searchText, setsearchText] = useState("");
    const { listOfRes, setlistOfRes, filteredList, setfilteredList } = useRestaurantcardData();

    const status = useOnlineStatus();

    if (status === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

    return filteredList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="search-btn ml-4 px-4 py-0.5 bg-green-200 rounded-lg" onClick={() => {
                        const filteredList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredList(filteredList);
                    }}>Search</button>

                    <button className="px-4 py-0.5 ml-10 bg-green-200 rounded-lg" onClick={() => {
                        const filteredList = listOfRes.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setfilteredList(filteredList)
                    }
                    }>Top Rated Restaurants</button>
                </div>

            </div>
            <div className="flex flex-wrap justify-center gap-4">
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