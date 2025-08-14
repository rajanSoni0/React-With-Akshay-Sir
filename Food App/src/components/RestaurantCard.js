import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { listOfRes } = props;
    const {
        id,
        name,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        avgRating,
        sla: { deliveryTime } = {}
    } = listOfRes?.info;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3> {name} </h3>
            <h4> {cuisines?.join(", ")} </h4>
            <h4> {avgRating} stars </h4>
            <h4> {costForTwo} </h4>
            <h4> {deliveryTime} Minutes </h4>
        </div>
    )
}

export default RestaurantCard;