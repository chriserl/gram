import React from "react";
import Nav from "../components/Nav";
import FeedCard from "../components/FeedCard";

//Data imports
import profilePic from "../assets/images/profileimages/jade.jpg";

let feedItems = [
  {
    userLink: "blmovement",
    likeCount: 52,
    commentCount: 32,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "alux.com",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "marvel",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "design1future",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "lexibelle",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "isetups",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
  },
  {
    userLink: "lionsgate",
    likeCount: 12,
    commentCount: 2,
    userComments: "loremipsum dolor sit amet",
    postImage: profilePic,
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
            <p className="h2 profile-name">Linda Clarkson</p>
            <p className="profile-link pl">@clinda</p>
            <p className="pl profile-desc">
              Living the dream life <span> 😉 </span>
            </p>
          </div>
          <section className="posts-section">
            {feedItems.map((feedItem) => (
              <FeedCard postInfo={feedItem} key={feedItem.userLink} />
            ))}
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}
