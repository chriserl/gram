import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";
import Sidenav from "../components/Sidenav";
import FeedView from "../views/Feed";
import Explore from "../views/Explore";
import Notifications from "../views/Notifications";
import SavedPosts from "../views/Saved";
import "../sass/main.scss";

//data imports
import profileImage from "../assets/images/profileimages/jade.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sidenav-inactive",
      msgNotifState: true,
      genNotifState: true,
      profileState: {
        profileImage: profileImage,
        hasStory: true,
        profileName: "Unjaded Jade",
        profileLink: "jade",
        postsNum: 46,
        followersNum: "2.8k",
        followingNum: 526,
      },
      currView: "feed",
    };
  }

  toggleSn = () => {
    this.state.sideNavState === ""
      ? this.setState((oldState) => ({ sideNavState: "sidenav-inactive" }))
      : this.setState((oldState) => ({ sideNavState: "" }));
  };

  render() {
    return (
      <BrowserRouter>
        <GlobalContext.Provider
          value={{ state: this.state, toggleSn: this.toggleSn }}
        >
          <div className="feed">
            <Sidenav />
            <main>
              {/* <FeedView /> */}
              <Route
                exact
                path={`${this.props.match.url}`}
                component={FeedView}
              ></Route>
              <Route
                path={`${this.props.match.url}/explore`}
                component={Explore}
              ></Route>
              <Route
                path={`${this.props.match.url}/notifications`}
                component={Notifications}
              ></Route>
              <Route
                path={`${this.props.match.url}/saved`}
                component={SavedPosts}
              ></Route>
            </main>
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
