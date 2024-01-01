import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlinesStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const status=useOnlineStatus();
  return (
    <div className="flex justify-between p-1 m-1 bg-gray-100 drop-shadow-lg">
      {console.log("between")}

      <div className="w-40">
        <img className="w-28 mt-2 bg-gray-100" alt="hi hello" src={LOGO_URL} />
      </div>
      <div >
        <ul className="flex my-3 py-2 justify-between">
          <li className="p-3 w-auto font-bold">{status===true?"status  green" : "status red"}</li>
          <li className="p-3 w-auto">
            <Link className="font-bold" to="/">Home</Link>
          </li>
          <li className="p-3 w-auto">
            <Link className="font-bold" to="/about">About Us</Link>
          </li>
          <li className="p-3 w-auto font-bold"> Contact US</li>
          <li className="p-3 w-auto font-bold">Cart</li>
          <button
            className="p-3 w-19 font-bold" 
            onClick={() => {
              Login === "Logout" ? setLogin("Login") : setLogin("Logout");
            }}
          >
            {Login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
