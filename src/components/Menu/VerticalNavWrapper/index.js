import React from "react";
import MetisMenu from "react-metismenu";
import { connect } from "react-redux";

import { setEnableMobileMenu } from "reducers/ThemeOptions";

class VerticalNavWrapper extends React.Component {
  state = {
    nav: [],
  };

  componentDidMount = () => {
    this.setState({
      nav: [
        {
          icon: "pe-7s-users metismenu-icon-red",
          label: "People",
          to: "#/people",
        },
      ],
    });
  };

  render = () => {
    return (
      <>
        <br />
        <style>
          {`
            .metismenu-icon-red { color: #ff0000; }
            .metismenu-icon-orange { color: #ff5500; }
            .metismenu-icon-yellow { color: #808000; }
            .metismenu-icon-green { color: #009933; }
            .metismenu-icon-blue { color: #0000ff; }
            .metismenu-icon-violet { color: #4b0082; }
            .metismenu-icon-purple { color: #9400d3; }
          `}
        </style>
        <MetisMenu
          content={this.state.nav}
          onSelected={() =>
            this.props.setEnableMobileMenu(!this.props.enableMobileMenu)
          }
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </>
    );
  };
}

const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  data: state,
});

export default connect(mapStateToProps, {
  setEnableMobileMenu,
})(VerticalNavWrapper);
