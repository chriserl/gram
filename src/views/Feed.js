import React from "react";
import GlobalContext from "../contexts/GlobalContext";
import Nav from "../components/Nav";
import Stories from "../components/Stories";
import FeedCard from "../components/FeedCard";
import post1 from "../assets/images/profileimages/prof1.jpg";
import post2 from "../assets/images/profileimages/prof2.jpg";
import post3 from "../assets/images/profileimages/prof3.jpg";
import post4 from "../assets/images/profileimages/prof4.jpg";
import post5 from "../assets/images/profileimages/prof5.jpg";
import post6 from "../assets/images/profileimages/prof7.jpg";
import post7 from "../assets/images/profileimages/prof8.jpg";
import { useState } from "react";

export default function FeedView() {
  let [feedItems, setFeedItems] = useState(() => [
    {
      userLink: "blmovement",
      likeCount: 52,
      commentCount: 32,
      userComments: "loremipsum dolor sit amet",
      postImage: post1,
    },
    {
      userLink: "alux.com",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post2,
    },
    {
      userLink: "marvel",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post3,
    },
    {
      userLink: "design1future",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post4,
    },
    {
      userLink: "lexibelle",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post5,
    },
    {
      userLink: "isetups",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post6,
    },
    {
      userLink: "lionsgate",
      likeCount: 12,
      commentCount: 2,
      userComments: "loremipsum dolor sit amet",
      postImage: post7,
    },
  ]);

  return (
    <div className="feed-view">
      <GlobalContext.Consumer>
        {(contextState) => (
          <React.Fragment>
            <Nav
              toggleSidenav={contextState.toggleSn}
              msgNotif={contextState.state.msgNotifState}
              genNotif={contextState.state.genNotifState}
            />
            <Stories />
            <section className="feed">
              <p className="section-title h3">Feed</p>

              <div className="feed-items">
                {feedItems.map((feedItem) => (
                  <FeedCard postInfo={feedItem} key={feedItem.userLink} />
                ))}
              </div>
            </section>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    </div>
  );
}
