import React from "react";
import { connect } from "react-redux";

class Settings extends React.Component {
  render() {
    return (
      <div className="container-fluid my-3">
        <label htmlFor='input'>Write your name:</label>
        <input
          type="text"
          id="input"
          placeholder="Type your name"
          className="form-control"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleChange: event =>
    dispatch({ type: "HANDLECHANGE", text: event.target.value })
});

export default connect(
  null,
  mapDispatchToProps
)(Settings);
