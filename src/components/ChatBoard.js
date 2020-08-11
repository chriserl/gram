import React from "react";
import profileImg from "../assets/images/icons/menuicons/undo.svg";
import sendIcon from "../assets/images/icons/menuicons/send.svg";
import emojiIcon from "../assets/images/icons/menuicons/happy.svg";

export default function ChatBoard(props) {
  let boardVisibility;
  props.visibility === "chats-visible"
    ? (boardVisibility = "board-invisible")
    : (boardVisibility = "board-visible");
  return (
    <React.Fragment>
      <section className={`chat-board ${boardVisibility}`}>
        <div className="chat-board-nav">
          <button
            onClick={() => props.hideChats()}
            className="back-btn icon-btn"
          >
            <img src={profileImg} alt="back-icon" className="btn-icon" />
          </button>
          <div className="profile-info">
            <p className="profile-name plb">Janice White</p>
            <p className="status ps">online</p>
          </div>
        </div>
        <div className="chat">
          <div className="chat-bar">
            <form className="chat-form">
              <button className="icon-btn">
                <img
                  src={emojiIcon}
                  className="emoji-icon icon"
                  alt="emoji icon"
                />
              </button>
              <div className="form-control">
                <input placeholder="Message" />
              </div>
              <button className="icon-btn">
                <img
                  src={sendIcon}
                  className="send-icon icon"
                  alt="send icon"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
