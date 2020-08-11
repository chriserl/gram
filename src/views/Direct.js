import React, { useState } from "react";
import Nav from "../components/Nav";
import ChatList from "../components/ChatList";
import profileImg1 from "../assets/images/profileimages/jade.jpg";
import profileImg2 from "../assets/images/profileimages/jade.jpg";
import GlobalContext from "../contexts/GlobalContext";
import ChatBoard from "../components/ChatBoard";

export default function Direct() {
  const [viewTitle, setViewTitle] = useState(() => "title-visible");
  const [chats, setChats] = useState(() => [
    {
      chatProfile: profileImg1,
      profileName: "Byron Whitmore",
      timestamp: "19:23",
      lastMsg: "Functional components a...",
    },
    {
      chatProfile: profileImg2,
      profileName: "Nymeria",
      timestamp: "5:23",
      lastMsg: "We're waiting for you",
    },
  ]);

  let [listStatus, setStatus] = useState("chats-visible");
  const toggleStatus = () => {
    listStatus === "chats-visible"
      ? setStatus((oldStatus) => "chats-invisible")
      : setStatus((oldStatus) => "chats-visible");
    viewTitle === "title-visible"
      ? setViewTitle((oldStatus) => "title-invisible")
      : setViewTitle((oldStatus) => "title-visible");
  };

  return (
    <GlobalContext.Consumer>
      {(contextState) => (
        <div className="direct-scaffold">
          <React.Fragment>
            <Nav
              toggleSidenav={contextState.toggleSn}
              msgNotif={contextState.state.msgNotifState}
              genNotif={contextState.state.genNotifState}
            />
            <section className="direct">
              <p className={`section-title ${viewTitle}`}>Direct Messages</p>
              <div className="section-content">
                <ChatList
                  chats={chats}
                  visibility={listStatus}
                  hideChats={() => toggleStatus()}
                />
                <ChatBoard
                  visibility={listStatus}
                  hideChats={() => toggleStatus()}
                />
              </div>
            </section>
          </React.Fragment>
        </div>
      )}
    </GlobalContext.Consumer>
  );
}
