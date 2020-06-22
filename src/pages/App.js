import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";
import Sidenav from "../components/Sidenav";
import FeedView from "../views/Feed";
import Explore from "../views/Explore";
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
      <BrowserRouter>
        <GlobalContext.Provider
          value={{ state: this.state, toggleSidenav: this.toggleSidenav }}
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
            </main>
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
