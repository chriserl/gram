import React from "react";
import Nav from "../components/Nav";
import image from "../assets/images/profileimages/prof11.jpg";

function Notifications() {
  return (
    <div class="notifications">
      <Nav />
      <ul className="notifications-list">
        <li className="notification-item">
          <img src={image} alt="not user" className="notification-user-image" />
          <div className="notification-info">
            <div className="notification-title">
              <p className="plb">Nisha followed you</p>{" "}
              <span className="psb">19:45</span>
            </div>

            <p className="ps notification-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </li>
        <li className="notification-item">
          <img src={image} alt="not user" className="notification-user-image" />
          <div className="notification-info">
            <div className="notification-title">
              <p className="plb">Nisha followed you</p>{" "}
              <span className="psb">19:45</span>
            </div>

            <p className="ps notification-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing functional
              elit.
            </p>
          </div>
        </li>
        <li className="notification-item">
          <img src={image} alt="not user" className="notification-user-image" />
          <div className="notification-info">
            <div className="notification-title">
              <p className="plb">Nisha followed you</p>{" "}
              <span className="psb">19:45</span>
            </div>

            <p className="ps notification-text">
              Lorem, ipsum dolor sit plato man oi amet consectetur adipisicing
              elit.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
