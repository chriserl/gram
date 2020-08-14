import React from "react";
import Nav from "../components/Nav";
import FeedCard from "../components/FeedCard";

//Data imports
import profilePic from "../assets/images/profileimages/jade.jpg";
import post1 from "../assets/images/profileimages/prof1.jpg";
import post2 from "../assets/images/profileimages/prof2.jpg";
import post3 from "../assets/images/profileimages/prof3.jpg";
import post4 from "../assets/images/profileimages/prof4.jpg";
import post5 from "../assets/images/profileimages/prof5.jpg";
import post6 from "../assets/images/profileimages/prof7.jpg";
import post7 from "../assets/images/profileimages/prof8.jpg";

let feedItems = [
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
];

export default function SavedPosts() {
  return (
    <React.Fragment>
      <Nav />
      <section className="saved-posts">
        <p className="section-title h3">Saved</p>

        <div className="profile-area">
          <img src={profilePic} alt="profile" className="profile-img" />
          <div className="profile-info">
            <p className="h3 profile-name">Linda Clarkson</p>
            <p className="profile-link pl">@clinda</p>
            <p className="pl profile-desc">
              Living the dream life <span> 😉 </span>
            </p>
          </div>
        </div>
        <section className="posts-section">
          {feedItems.map((feedItem) => (
            <FeedCard
              postInfo={feedItem}
              key={feedItem.userLink}
              mode="saved"
            />
          ))}
        </section>
      </section>
    </React.Fragment>
  );
}
