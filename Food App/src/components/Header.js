import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const status = useOnlineStatus();

    return (
        <div className="flex justify-between bg-orange-50 shadow-lg">
            <div className="">
                <img className="w-24" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4">Online Status: {status ? '🟢' : '🔴'} </li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4"> <Link to={"/grocery"}>Grocery</Link> </li>
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