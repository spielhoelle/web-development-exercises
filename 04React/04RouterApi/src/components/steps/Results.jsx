import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import OnPageCheck from "../../modules/OnPageCheck";
import Result from "./Result";
import jsPDF from "jspdf";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: "",
      results: {}
    };
  }

  resultsRef = React.createRef();

  async componentDidMount() {
    const website = this.props.url ? this.props.url.trim() : null;

    if (website === null) {
      return this.props.history.push("/");
    }

    const proxiedWebsite = `https://cors-anywhere.herokuapp.com/${decodeURIComponent( website )}`;
    let response = "";

    try {
      response = await Axios.get(proxiedWebsite);
    } catch (error) {
      this.setState(state => {
        state.loading = false;
        state.error = "The website could not be loaded.";
        return state;
      });

      return;
    }

    const Checker = new OnPageCheck(response.data.body, this.props.keywords);
    const results = Checker.runChecks();

    this.setState(state => {
      state.loading = false;
      state.results = results;
      return state;
    });
  }

  downloadPDF = e => {
    e.preventDefault();

    const doc = new jsPDF();
    doc.fromHTML(this.resultsRef.current, 15, 15, {
      width: 170
    });
    doc.save(`OnPage Report`);
  };

  render() {
    return (
      <Fragment>
        {this.state.loading === true && (
          <div className="loading">
            <i className="fa fa-spin fa-spinner" /> Loading ...
          </div>
        )}

        {this.state.loading === false &&
          this.state.error !== "" && (
            <div className="alert alert-danger">
              <strong>Error:</strong> {this.state.error}
            </div>
          )}

        {this.state.loading === false &&
          this.state.error === "" && (
            <div className="results" ref={this.resultsRef}>
              <div className="result-group">
                <h2>General</h2>

                <Result title="Page Title" result={this.state.results.title} />
                <Result title="Keywords" result={this.state.results.keywords} />
                <Result
                  title="Headlines"
                  result={this.state.results.headlines}
                />
              </div>
              <div className="result-group">
                <h2>Meta Elements</h2>

                <Result
                  title="Description"
                  result={this.state.results.meta.description}
                />
              </div>

              <a
                href="#pdf"
                className="btn btn-primary"
                onClick={this.downloadPDF}
              >
                <i className="fa fa-file-pdf-o" />&nbsp; Download PDF
              </a>

              <br />
            </div>
          )}
      </Fragment>
    );
  }
}

export default withRouter(Results);
