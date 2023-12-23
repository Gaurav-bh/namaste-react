import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlinesStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const status=useOnlineStatus();
  return (
    <div className="header">
      {console.log("between")}

      <div className="headerlogo">
        <img className="headerlogoimg" alt="hi hello" src={LOGO_URL} />
      </div>
      <div className="navitem">
        <ul>
          <li>{status===true?"status  red" : "status green"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
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
