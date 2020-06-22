import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import profileImage from "../assets/images/profileimages/jade.jpg";
import closeIcon from "../assets/images/icons/menuicons/cancel.svg";
import menuIcon from "../assets/images/icons/menuicons/menu.svg";
import searchIcon from "../assets/images/icons/menuicons/loupe.svg";
import notificationIcon from "../assets/images/icons/menuicons/bell.svg";
import messagesIcon from "../assets/images/icons/menuicons/envelope.svg";
import dmIcon from "../assets/images/icons/menuicons/send.svg";
import statsIcon from "../assets/images/icons/menuicons/barchart.svg";
import settingsIcon from "../assets/images/icons/menuicons/settings.svg";
import logoutIcon from "../assets/images/icons/menuicons/logout.svg";
import GlobalContext from "../contexts/GlobalContext";

export default function Sidenav(props) {
  return (
    <React.Fragment>
      <GlobalContext.Consumer>
        {(globalStore) => (
          <aside className={globalStore.state.sideNavState}>
            <div className="aside-header">
              <Brand />
              <span className="close-ham" onClick={globalStore.toggleSidenav}>
                <img
                  src={closeIcon}
                  alt="close sidemenu icon"
                  className="link-icon"
                />
              </span>
            </div>
            <section className="profile-content">
              <div className="profile-summary">
                <div className="story-unseen image">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <p className="profile-name h4">Unjaded Jade</p>
                <p className="profile-link ps">@jade</p>
              </div>
              <div className="profile-stats">
                <span className="posts stat">
                  <p className="posts-number plb">46</p>
                  <p className="ps stat-name">Posts</p>
                </span>
                <span className="followers stat">
                  <p className="followers-number plb">2.8k</p>
                  <p className="ps stat-name">Followers</p>
                </span>
                <span className="following stat">
                  <p className="following-number plb">526</p>
                  <p className="ps stat-name">Following</p>
                </span>
              </div>
              <ul className="side-menu">
                <li className="menu-item item-active">
                  <Link to="/gram" className="menu-link pl">
                    <img src={menuIcon} alt="menu icon" className="link-icon" />
                    Feed
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/gram/explore" className="menu-link pl">
                    <img
                      src={searchIcon}
                      alt="Explore icon"
                      className="link-icon"
                    />
                    Explore
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link pl">
                    <img
                      src={notificationIcon}
                      alt="Notifications icon"
                      className="link-icon"
                    />
                    Notifications
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link pl">
                    <img
                      src={messagesIcon}
                      alt="Messages icon"
                      className="link-icon"
                    />
                    Messages
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link pl">
                    <img src={dmIcon} alt="Dm icon" className="link-icon" />
                    Direct
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link pl">
                    <img
                      src={statsIcon}
                      alt="Stats icon"
                      className="link-icon"
                    />
                    Stats
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link pl">
                    <img
                      src={settingsIcon}
                      alt="Settings icon"
                      className="link-icon"
                    />
                    Settings
                  </Link>
                </li>
                <li className="menu-item logout">
                  <Link to="/" className="menu-link pl">
                    {" "}
                    <img
                      src={logoutIcon}
                      alt="Logout icon"
                      className="link-icon"
                    />
                    Logout
                  </Link>
                </li>
              </ul>
            </section>
          </aside>
        )}
      </GlobalContext.Consumer>
    </React.Fragment>
  );
}