import React, { useState } from "react";
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
  let [stories, setStories] = useState(() => [
    { storyState: "story-unseen", storyUserImg: prof1, storyUserName: "Brad" },
    { storyState: "story-unseen", storyUserImg: prof2, storyUserName: "Ricky" },
    { storyState: "story-unseen", storyUserImg: prof3, storyUserName: "Ollie" },
    { storyState: "story-unseen", storyUserImg: prof4, storyUserName: "Sam" },
    { storyState: "story-unseen", storyUserImg: prof5, storyUserName: "Maeve" },
    { storyState: "story-unseen", storyUserImg: prof6, storyUserName: "Louis" },
    { storyState: "story-unseen", storyUserImg: prof7, storyUserName: "Oleg" },
    {
      storyState: "story-unseen",
      storyUserImg: prof8,
      storyUserName: "Oxlade",
    },
    { storyState: "story-unseen", storyUserImg: prof9, storyUserName: "Samar" },
  ]);
  return (
    <React.Fragment>
      <section className="stories">
        <div className="stories-header">
          <p className="section-title h3">Stories</p>
          <button className="watch-all icon-btn">
            <span>
              <img src={watchIcon} alt="play icon" className="btn-icon" />
            </span>
            <p className="hs">Watch all</p>
          </button>
        </div>

        <ul className="story-items">
          <li className="story-item">
            <div className="add-story">
              <p className="h1">+</p>
            </div>
          </li>
          {stories.map((story) => (
            <li className="story-item" key={story.storyUserName}>
              <div className={`${story.storyState} image`}>
                <img
                  src={story.storyUserImg}
                  alt={story.storyUserName}
                  className="profile-image"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
