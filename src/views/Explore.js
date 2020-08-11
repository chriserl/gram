import React from "react";
import Nav from "../components/Nav";
import exploreImage from "../assets/images/profileimages/prof4.jpg";
import GlobalContext from "../contexts/GlobalContext";

function Explore() {
  return (
    <GlobalContext.Consumer>
      {(contextState) => (
        <React.Fragment>
          <section className="explore">
            <Nav
              toggleSidenav={contextState.toggleSn}
              msgNotif={contextState.state.msgNotifState}
              genNotif={contextState.state.genNotifState}
            />
            <div className="explore-nav-wrapper">
              <ul className="explore-tags">
                <li className="explore-tag active-tag">
                  <a href="/" className="tag-link plb">
                    For You
                  </a>
                </li>
                <li className="explore-tag">
                  <a href="/" className="tag-link pl">
                    Following
                  </a>
                </li>
                <li className="explore-tag">
                  <a href="/" className="tag-link pl">
                    Popular
                  </a>
                </li>
                <li className="explore-tag">
                  <a href="/" className="tag-link pl">
                    Featured
                  </a>
                </li>
                <li className="explore-tag">
                  <a href="/" className="tag-link pl">
                    Live
                  </a>
                </li>
                <li className="explore-tag">
                  <a href="/" className="tag-link pl">
                    Watch Later
                  </a>
                </li>
              </ul>
            </div>

            <section className="tab-content">
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
              <div className="explore-card">
                <img src={exploreImage} alt="explore" className="card-image" />
                <div className="explore-info">
                  <p className="psb card-title">Crazy Night With my Mom</p>
                  <div className="card-user">
                    <img
                      src={exploreImage}
                      alt="explorer"
                      className="card-user-image"
                    />
                    <div className="ps user-name">marieparis</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default Explore;
