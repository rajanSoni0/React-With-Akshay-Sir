import { useState } from "react";
import ItemList from "./ItemList";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantCategory = ({data, showIndex, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return(
        <div>
            
            <div className="w-7/12 mx-auto my-4 p-4">
                {/* Accordian Header */}
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    
                    <span> {showIndex ?<SlArrowUp /> :<SlArrowDown />}</span>
                </div>
                {/* Accordian Body */}

                {showIndex && <ItemList items = {data.itemCards}/>}
                
            </div>
            
        </div>
    )
}

export default RestaurantCategory;