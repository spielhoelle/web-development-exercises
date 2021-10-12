import React from "react";
import { withRouter } from "react-router-dom";

class Website extends React.Component {
  fields = {
    url: React.createRef(),
    keywords: React.createRef()
  };

  handleSubmit = e => {
    e.preventDefault();
    const keywords = this.fields.keywords.current.value
      .split(",")
      .map(item => item.trim());

    const website = {
      url: this.fields.url.current.value.trim(),
      keywords
    };

    this.props.updateWebsiteData(website);
    const urlEncoded = encodeURIComponent(website.url);

    this.props.history.push(`/check/${urlEncoded}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="URL"
            ref={this.fields.url}
            defaultValue={this.props.websiteData.url || ""}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Keywords, comma seperated"
            ref={this.fields.keywords}
            defaultValue={
              (this.props.websiteData.keywords &&
                this.props.websiteData.keywords.join(", ")) ||
              ""
            }
          />
        </div>

        <p>
          <button type="submit" className={`btn btn-primary`}>
            Next Step &nbsp;
            <i className="fa fa-arrow-right" />
          </button>
        </p>
      </form>
    );
  }
}

export default withRouter(Website);
