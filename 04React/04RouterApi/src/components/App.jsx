import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Website from "./steps/Website";
import Results from "./steps/Results";

class App extends React.Component {
  state = {
    website: {}
  };

  updateWebsiteData = data => {
    this.setState(state => {
      state.website = data;
      return state;
    });
  };

  render() {
    return (
      <Router>
        <div className="app container">
          <h1 className="text-center">Mini OnPage Check</h1>

          <Route
            exact
            path="/"
            render={() => (
              <Website
                websiteData={this.state.website}
                updateWebsiteData={this.updateWebsiteData}
              />
            )}
          />
          <Route
            path="/check/:url?"
            render={response => (
              <Results
                url={response.match.params.url || this.state.website.url}
                keywords={this.state.website.keywords}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
