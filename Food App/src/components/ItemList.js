
import { CDN_URL } from "../utils/constant";
import { VegIcon, NonVegIcon } from "../utils/Icon";
import Counter from "./Counter";


const ItemList = (items) => {
    
    items = items.items;
    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b flex justify-between">
                    <div className="py-2 w-9/12">
                        <p>{item.card.info.isVeg ? <VegIcon size={18} /> : <NonVegIcon size={18} />}</p>
                        <h2>{item.card.info.name}</h2>

                        <p>
                            ₹
                            {item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice
                                    ? item.card.info.defaultPrice / 100
                                    : "N/A"}
                        </p>

                        <p>
                            ⭐
                            {typeof item?.card?.info?.ratings?.aggregatedRating?.rating === "string"
                                ? item.card.info.ratings.aggregatedRating.rating
                                : "N/A"} (
                            {typeof item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 ===
                                "string"
                                ? item.card.info.ratings.aggregatedRating.ratingCountV2
                                : 0}
                            )
                        </p>

                        <p className="line-clamp-2 font-semibold text-[18px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)]">
                            {typeof item?.card?.info?.description === "string"
                                ? item.card.info.description
                                : ""}
                        </p>
                    </div>
                    <div className="relative w-[144px]">
                        {typeof item?.card?.info?.imageId === "string" && (
                            <img
                                className="w-[144px] h-[144px] object-cover rounded-2xl"
                                alt="res-logo"
                                src={CDN_URL + item.card.info.imageId}
                            />)}

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                            <Counter item={item} />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemList;