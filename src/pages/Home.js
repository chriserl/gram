import React from "react";
import { Link } from "react-router-dom";
import hdImage from "../assets/images/hdimage.png";
import playIcon from "../assets/images/icons/play.svg";
import Brand from "../components/Brand";
import "../sass/main.scss";

function App() {
  return (
    <div className="Home">
      <header>
        <nav>
          <Brand />
          <ul className="nav-links">
            <li className="nav-item">
              <a href="../../index.html" className="nav-link ps help">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a href="../../index.html" className="nav-link">
                <button className="btn-sec">Upgrade now</button>
              </a>
            </li>
          </ul>
        </nav>
        <section className="main">
          <div className="image-area">
            <img src={hdImage} alt="Instagram redesign" className="hd-image" />
          </div>
          <div className="info-area">
            <p className="h1 main-text">
              Pimp Your Design <br />
              on Instagram
            </p>
            <p className="pl aux-text">
              More functional and beautiful design. <br />
              Your life becomes more pleasant.
            </p>
            <div className="ctaz">
              <button className="btn-prim upgrade-button">
                <Link to="/gram">Upgrade now</Link>
              </button>
              <button className="icon-btn">
                <span>
                  <img src={playIcon} alt="play" className="btn-icon" />
                </span>
                Watch now
              </button>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;