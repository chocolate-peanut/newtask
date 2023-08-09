import React from "react";
import cx from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";

import VerticalNavWrapper from "./VerticalNavWrapper";

const Sidemenu = (props) => {
  return (
    <>
      <div
        className="sidebar-mobile-overlay"
        onClick={() => props.setEnableMobileMenu(!props.enableMobileMenu)}
      />
      <div
        className={cx("app-sidebar", props.backgroundColor, {
          "sidebar-shadow": props.enableSidebarShadow,
        })}
      >
        <PerfectScrollbar>
          <div className="app-sidebar__inner">
            <VerticalNavWrapper />
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage,
  backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
});

export default connect(mapStateToProps)(Sidemenu);
