import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Model.css";

const Model = () => {
  return (
    <div>
      <div className="firstHeading">
        <h1 className="large-bold-text">Model 3</h1>
        <p className="small-text">Order Online for <a href="https://www.tesla.com/support/taking-delivery?redirect=no"><span className="custom-link">Touchless Delivery</span></a></p>
      </div>
      <div className="responsive-flex">
        <a href="https://www.tesla.com/model3/design">
            <button className="styled-box">Custom Order</button>
        </a>
        <a href="https://www.tesla.com/inventory/new/m3">
        <button className="box-style">Existing Inventory</button>
        </a>
      </div>
      <div className="bouncing-element">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Model;
