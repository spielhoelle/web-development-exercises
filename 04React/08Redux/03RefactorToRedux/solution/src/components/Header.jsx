import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className="">
        <Nav settings={this.props.settings} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(
  mapStateToProps,
  null
)(Header);
