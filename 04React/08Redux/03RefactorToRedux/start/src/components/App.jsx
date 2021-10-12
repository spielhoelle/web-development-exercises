import React from "react";
import Header from "./Header";
import Settings from "./Settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      settings: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Header settings={this.state.settings} />
        <Settings
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
