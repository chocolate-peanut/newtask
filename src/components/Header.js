import React from "react";
import cx from "classnames";
import { connect } from "react-redux";

const Header = ({
  headerBackgroundColor,
  enableMobileMenuSmall,
  enableHeaderShadow,
}) => {
  return (
    <div
      className={cx("app-header", headerBackgroundColor, {
        "header-shadow": enableHeaderShadow,
      })}
    >
      <div
        className={cx("app-header__content", {
          "header-mobile-open": enableMobileMenuSmall,
        })}
      >
        <div className="app-header-left"></div>
        <div className="app-header-right"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

export default connect(mapStateToProps)(Header);
