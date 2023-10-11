import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  return (
    <div className="header">
      {console.log("between")}

      <div className="headerlogo">
        <img className="headerlogoimg" alt="hi hello" src={LOGO_URL} />
      </div>
      <div className="navitem">
        <ul>
          <li>Menu</li>
          <li>About Us</li>
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
