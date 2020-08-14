import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import closeIcon from "../assets/images/icons/menuicons/cancel.svg";
import menuIcon from "../assets/images/icons/menuicons/menu.svg";
import searchIcon from "../assets/images/icons/menuicons/loupe.svg";
import notificationIcon from "../assets/images/icons/menuicons/bell.svg";
import logoutIcon from "../assets/images/icons/menuicons/logout.svg";
import saveIcon from "../assets/images/icons/menuicons/saved.svg";
import GlobalContext from "../contexts/GlobalContext";

export default function Sidenav() {
  const [sideLinks, setSideLinks] = useState(() => ({
    feed: {
      name: "Feed",
      link: "",
      className: "item-active",
      img: menuIcon,
    },
    explore: {
      name: "Explore",
      link: "explore",
      className: "",
      img: searchIcon,
    },
    notifications: {
      name: "Notifications",
      link: "notifications",
      className: "",
      img: notificationIcon,
    },
    saved: {
      name: "Saved",
      link: "saved",
      className: "",
      img: saveIcon,
    },
    logout: {
      name: "Logout",
      link: "logout",
      className: "logout",
      img: logoutIcon,
    },
  }));

  const changeActive = (link) => {
    setSideLinks((prevLinks) => {
      Object.keys(prevLinks).forEach((key) => {
        prevLinks[key].className = "";
      });
      prevLinks[link].className = `${prevLinks[link].className} item-active`;
      return { ...prevLinks };
    });
  };
  return (
    <React.Fragment>
      <GlobalContext.Consumer>
        {(contextState) => {
          let state = contextState.state;
          return (
            <aside className={contextState.state.sideNavState}>
              <div className="aside-header">
                <Brand locale="./gram" />
                <span className="close-ham" onClick={contextState.toggleSn}>
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
                      src={state.profileState.profileImage}
                      alt="Profile"
                      className="profile-image"
                    />
                  </div>
                  <p className="profile-name h4">
                    {state.profileState.profileName}
                  </p>
                  <p className="profile-link ps">{`@${state.profileState.profileLink}`}</p>
                </div>
                <div className="profile-stats">
                  <span className="posts stat">
                    <p className="posts-number plb">
                      {state.profileState.postsNum}
                    </p>
                    <p className="ps stat-name">Posts</p>
                  </span>
                  <span className="followers stat">
                    <p className="followers-number plb">
                      {state.profileState.followersNum}
                    </p>
                    <p className="ps stat-name">Followers</p>
                  </span>
                  <span className="following stat">
                    <p className="following-number plb">
                      {state.profileState.followingNum}
                    </p>
                    <p className="ps stat-name">Following</p>
                  </span>
                </div>
                <ul className="side-menu">
                  {Object.keys(sideLinks).map((sideLink) => (
                    <li
                      onClick={() => changeActive(sideLink)}
                      className={`menu-item ${sideLinks[sideLink].className}`}
                      key={sideLinks[sideLink].name}
                    >
                      <NavLink
                        to={`/gram/${sideLinks[sideLink].link}`}
                        className="menu-link pl"
                      >
                        <img
                          src={sideLinks[sideLink].img}
                          alt="menu icon"
                          className="link-icon"
                        />
                        {sideLinks[sideLink].name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          );
        }}
      </GlobalContext.Consumer>
    </React.Fragment>
  );
}
