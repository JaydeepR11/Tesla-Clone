import React, { useState } from "react";
import "./Navbar.css";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div>
        <a href="https://tesla.com">
          <img
            className="navbarLogo"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </a>
      </div>

      <div className="responsive-visibility">
        <ul className="options">
          <li className="optionsList">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/solarpanels">Solar Panels</a>
          </li>
        </ul>
      </div>

      <div className="responsive-visibility">
        <ul className="options">
          <li className="optionsList">
            <a href="https://shop.tesla.com">Shop</a>
          </li>
          <li className="optionsList">
            <a href="https://tesla.com/teslaaccount">Account</a>
          </li>
          <li onClick={handleNav} className="optionsList">
            Menu
          </li>
        </ul>
      </div>
      <div className="large-screen-hidden">
        <button onClick={handleNav} className="custom-button">
          Menu
        </button>
      </div>
      <div className={nav ? "menu" : "menu2"}>
        <div className="menuClose">
          <TfiClose onClick={handleNav} className="closeButton" size={28} />
        </div>
        <ul className="menu-top">
          <li className="menuList">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="menuList">
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li className="menuList">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="menuList">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="menuList">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="menuList">
            <a href="https://tesla.com/solarpanels">Solar Panels</a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/inventory/new/m3">
              Existing Inventory
            </a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/tradein">Trade-In</a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/drive">Test Drive</a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/insurance">Insurance</a>
          </li>
          <li className="menuList">
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
