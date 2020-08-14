import React from "react";
import Nav from "../components/Nav";
import image from "../assets/images/profileimages/prof11.jpg";
import GlobalContext from "../contexts/GlobalContext";

export default function Notifications() {
  return (
    <GlobalContext.Consumer>
      {(contextState) => (
        <React.Fragment>
          <div className="notifications">
            <Nav
              toggleSidenav={contextState.toggleSn}
              msgNotif={contextState.state.msgNotifState}
              genNotif={contextState.state.genNotifState}
            />
            <ul className="notifications-list">
              <li className="notification-item">
                <img
                  src={image}
                  alt="not user"
                  className="notification-user-image"
                />
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
                <img
                  src={image}
                  alt="not user"
                  className="notification-user-image"
                />
                <div className="notification-info">
                  <div className="notification-title">
                    <p className="plb">Nisha followed you</p>{" "}
                    <span className="psb">19:45</span>
                  </div>

                  <p className="ps notification-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    functional elit.
                  </p>
                </div>
              </li>
              <li className="notification-item">
                <img
                  src={image}
                  alt="not user"
                  className="notification-user-image"
                />
                <div className="notification-info">
                  <div className="notification-title">
                    <p className="plb">Nisha followed you</p>{" "}
                    <span className="psb">19:45</span>
                  </div>

                  <p className="ps notification-text">
                    Lorem, ipsum dolor sit plato man oi amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
