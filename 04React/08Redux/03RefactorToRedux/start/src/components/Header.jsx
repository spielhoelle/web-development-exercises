import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <div className="">
        <Nav settings={this.props.settings} />
      </div>
    );
  }
}

export default Header;
