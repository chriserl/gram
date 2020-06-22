import React from "react";
import GlobalContext from "../contexts/GlobalContext";
import Sidenav from "../components/Sidenav";
import FeedView from "../views/Feed";
import "../sass/main.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "profile-inactive",
    };
  }

  toggleSidenav = () => {
    this.state.sideNavState === ""
      ? this.setState((oldState) => ({ sideNavState: "profile-inactive" }))
      : this.setState((oldState) => ({ sideNavState: "" }));
    console.log(this.state.sideNavState);
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{ state: this.state, toggleSidenav: this.toggleSidenav }}
      >
        <div className="feed">
          <Sidenav />
          <main>
            <FeedView />
          </main>
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
