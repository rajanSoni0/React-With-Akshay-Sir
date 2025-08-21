import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { listOfRes } = props;
    const {
        id,
        name,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        locality,
        avgRating,
        sla: { deliveryTime } = {}
    } = listOfRes?.info;

    return (
        <div className="m-4 w-[250px] rounded-2xl overflow-hidden  hover:scale-105 transition-all duration-300">
            <Link to={`/restaurant/${id}`}>
                <div className="relative">
                    <img
                        className="w-full h-[160px] object-cover rounded-2xl"
                        alt="res-logo"
                        src={CDN_URL + cloudinaryImageId}
                    />

                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl"></div>
                    <h4 className="absolute bottom-2 left-3 text-white font-semibold uppercase text-xl"> {costForTwo} </h4>


                </div>

                <div className="m-2">
                    <h3 className="font-bold text-[18px] w-full truncate"> {name} </h3>
                    <h4> <span className="text-green-600">⭐</span> {avgRating}• {deliveryTime} mins </h4>
                    <h4 className="w-full truncate text-gray-500"> {cuisines?.join(", ")} </h4>
                    <h4 className="text-gray-500">{locality}</h4>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard;