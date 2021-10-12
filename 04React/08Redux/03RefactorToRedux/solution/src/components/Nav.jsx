import React from "react";
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Hello {this.props.settings}!
        </a>
      </nav>
    );
  }
}

export default Nav;
