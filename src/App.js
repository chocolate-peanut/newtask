//refer to this template: https://dashboardpack.com/live-demo-preview/?livedemo=290

import React from "react";
import { Link } from "react-router-dom";
import ResizeDetector from "react-resize-detector";
import cx from "classnames";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidemenu from "./components/Menu/Sidemenu";

import PeopleContainer from "./containers/People";

import "./stylesheets/base.scss";
import "./App.css";

function App() {
  return (
    // <div className="app-container">
    //   <div className="app-header header-shadow d-flex justify-content-center">
    //     <nav className="navbar navbar-light">
    //       <div className="app_header__content">
    //         <span className="navbar-brand mb-0 h1">WELCOME</span>
    //       </div>
    //     </nav>
    //   </div>
    //   <div className="app-container__heading">
    //     <Link to="/">Home</Link>
    //   </div>
    //   <div className="app-container__heading">
    //     <Link to="/people">People</Link>
    //   </div>
    // </div>
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <>
          <div
            className={cx(
              "app-container",
              { "fixed-sidebar": width < 1250 },
              { "closed-sidebar": width < 1250 },
              { "closed-sidebar-mobile": width < 1250 }
            )}
          >
            <Header />
            <div className="app-main">
              <Sidemenu />
              <div className="app-main__outer">
                <div className="app-main__inner">
                  <BrowserRouter>
                    <Routes>
                      <Route path="/people" element={<PeopleContainer />} />
                    </Routes>
                  </BrowserRouter>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
}

export default App;
