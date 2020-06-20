import React from "react";
import Sidenav from "../components/Sidenav";
import FeedView from "../views/Feed";
import "../sass/main.scss";

function App() {
  return (
    <div className="feed">
      <Sidenav />
      <main>
        <FeedView />
      </main>
    </div>
  );
}

export default App;
