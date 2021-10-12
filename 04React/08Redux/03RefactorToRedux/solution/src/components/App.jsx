import React from "react";
import Header from "./Header";
import Settings from "./Settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: ""
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Settings/>
      </div>
    );
  }
}

export default App;
