import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OfflineIcon, OnlineIcon } from "../utils/StatusIcon";
import userContext from "../utils/UserContext";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const status = useOnlineStatus();
    const data = useContext(userContext);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-orange-50 shadow-lg">
            <div className="">
                <img className="w-24" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 my-1">{status ? <OnlineIcon /> : <OfflineIcon />} </li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4"> <Link to={"/grocery"}>Grocery</Link> </li>
                    <li className="px-4">
                        <Link to={"/cart"}>
                        <div className="flex items-center gap-1">
                            <BsCart4 />
                            <span>({cartItems.length})</span>
                        </div>
                        </Link>
                    </li>
                    <li className="px-4"><button className="login-btn" onClick={() => {
                        btnName === "Login" ?
                            setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;