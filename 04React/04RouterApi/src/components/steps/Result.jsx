import React from "react";

class Result extends React.Component {
  detailsToggle = React.createRef();
  details = React.createRef();

  toggleDetails = () => {
    this.details.current.classList.toggle("show");
    this.detailsToggle.current.classList.toggle("fa-plus-square-o");
    this.detailsToggle.current.classList.toggle("fa-minus-square-o");
  };

  render() {
    const result = this.props.result;

    return (
      <div className="result-item">
        <h3
          onClick={this.toggleDetails}
          className={result.passed ? "passed" : ""}
        >
          <i className={`fa ${result.passed ? "fa-check" : "fa-times"}`} />&nbsp;
          {this.props.title}
          <i
            className={`result-item-toggle fa ${
              result.passed ? "fa-plus-square-o" : "fa-minus-square-o"
            }`}
            ref={this.detailsToggle}
          />
        </h3>
        <div
          className={`result-details collapse ${
            result.passed ? "collapsed" : "show"
          }`}
          ref={this.details}
        >
          {result.message}
        </div>
      </div>
    );
  }
}

export default Result;
