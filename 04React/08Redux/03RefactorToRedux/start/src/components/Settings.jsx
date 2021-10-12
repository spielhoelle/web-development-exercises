import React from "react";

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

export default Settings;
