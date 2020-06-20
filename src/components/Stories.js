import React from "react";
import watchIcon from "../assets/images/icons/play.svg";
import prof1 from "../assets/images/profileimages/prof1.jpg";
import prof2 from "../assets/images/profileimages/prof2.jpg";
import prof3 from "../assets/images/profileimages/prof3.jpg";
import prof4 from "../assets/images/profileimages/prof4.jpg";
import prof5 from "../assets/images/profileimages/prof5.jpg";
import prof6 from "../assets/images/profileimages/prof6.jpg";
import prof7 from "../assets/images/profileimages/prof7.jpg";
import prof8 from "../assets/images/profileimages/prof8.jpg";
import prof9 from "../assets/images/profileimages/prof9.jpg";

export default function Stories() {
  return (
    <React.Fragment>
      <section className="stories">
        <div className="stories-header">
          <p className="section-title h3">Stories</p>
          <span className="watch-all icon-btn">
            <span>
              <img src={watchIcon} alt="play icon" className="btn-icon" />
            </span>
            <p className="hs">Watch all</p>
          </span>
        </div>

        <ul className="story-items">
          <li className="story-item">
            <div className="add-story">
              <p className="h1">+</p>
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof1} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof2} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof3} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof4} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof5} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof6} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof7} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof8} alt="Profile" className="profile-image" />
            </div>
          </li>
          <li className="story-item">
            <div className="story-unseen image">
              <img src={prof9} alt="Profile" className="profile-image" />
            </div>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}
