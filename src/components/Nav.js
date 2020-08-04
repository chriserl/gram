import React from "react";
import hamburgerIcon from "../assets/images/icons/menu.svg";
import searchIcon from "../assets/images/icons/menuicons/loupe.svg";
import notificationIcon from "../assets/images/icons/menuicons/bell.svg";
import messagesIcon from "../assets/images/icons/menuicons/envelope.svg";

export default function Nav(props) {
  return (
    <React.Fragment>
      <nav>
        <button className="hamBtn" onClick={props.toggleSidenav}>
          <img
            src={hamburgerIcon}
            alt="side navigation icon"
            className="hamburger-icon"
          />
        </button>
        <form>
          <div className="form-control">
            <img
              src={searchIcon}
              alt="search icon"
              className="search-icon link-icon"
            />
            <input
              type="search"
              name="main-search"
              id="main-search"
              placeholder="Seach"
              aria-placeholder="Search"
            />
          </div>
        </form>
        <ul className="nav-items">
          <li className="nav-item">
            <img
              src={notificationIcon}
              alt="notifications icon"
              className="nav-icon link-icon"
            />
            {props.msgNotif === true && <span className="h2">&middot;</span>}
          </li>
          <li className="nav-item">
            <img
              src={messagesIcon}
              alt="Messages icon"
              className="nav-icon link-icon"
            />
            {props.genNotif === true && <span className="h2">&middot;</span>}
          </li>
          <li className="nav-item">
            <button className="btn-prim">Add photo</button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
