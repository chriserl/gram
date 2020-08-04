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
          <Brand locale="./" />
          <ul className="nav-links">
            <li className="nav-item">
              <a href="../../index.html" className="nav-link ps help">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a href="../../index.html" className="nav-link">
                <button className="btn-sec">Sign up</button>
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
                <Link to="/gram">Sign up</Link>
              </button>
              <button className="btn-light login">Login</button>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
