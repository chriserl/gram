import React from "react";

export default function ChatList(props) {
  return (
    <React.Fragment>
      <div className={"chat-list " + props.visibility}>
        <ul className="chat-items">
          {props.chats.map((chat) => (
            <li
              className="chat-item"
              key={chat.profileName}
              onClick={() => props.hideChats()}
            >
              <img
                src={chat.chatProfile}
                alt="Contact profile"
                className="profile-img"
              />
              <div className="chat-info">
                <div className="chat-title">
                  <p className="plb">{chat.profileName}</p>
                  <span className="psb">{chat.timestamp}</span>
                </div>
                <p className="last-msg ps">{chat.lastMsg}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
