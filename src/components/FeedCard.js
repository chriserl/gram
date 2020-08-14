import React from "react";
import likeIcon from "../assets/images/icons/menuicons/heart.svg";
import commentIcon from "../assets/images/icons/menuicons/speech-bubble.svg";

export default function FeedCard(props) {
  let postInfo = props.postInfo;
  postInfo.userLink.length > 9 &&
    (postInfo.userLink = postInfo.userLink.slice(0, 8) + "...");

  return (
    <React.Fragment>
      <span className={`feed-card plb ${props.mode}`}>
        <img src={postInfo.postImage} alt="feed" className="feed-image" />
        <div className="feed-controls">
          <div className="post-user">
            <p className="post-user-link">{"@" + postInfo.userLink}</p>
          </div>
          <div className="actions">
            <div className="like">
              <img src={likeIcon} alt="like post" className="like-icon" />
              <p className="like-count">{postInfo.likeCount + "k"}</p>
            </div>
            <div className="comment">
              <img
                src={commentIcon}
                alt="comment on post icon"
                className="comment-icon"
              />
              <p className="comment-count">{postInfo.commentCount}</p>
            </div>
          </div>
        </div>
        <div className="feed-info hidden">
          <p className="psb user-link">@blmovement:</p>
          <p className="ps">Lorem, ipsum dolor sit amet constur adipisicing.</p>
        </div>
      </span>
    </React.Fragment>
  );
}
