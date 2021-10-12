class OnPageCheck {
  constructor(html, keywords = []) {
    this.html = html;
    this.keywords = keywords;
  }

  renderDOM(html) {
    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");

    return document;
  }

  runChecks() {
    const document = this.renderDOM(this.html);

    return {
      meta: {
        description: this.checkMetaDescription(document)
      },
      title: this.checkTitle(document),
      keywords: this.checkKeywords(document, this.keywords),
      headlines: this.checkForHeadlines(document)
    };
  }

  checkForHeadlines(document) {
    const headlines = document.querySelectorAll("h1,h2,h3,h4,h5,h6");

    if (headlines.length !== 0) {
      return this.checkSuccess(
        `Great! You have ${headlines.length} headlines on your website.`
      );
    } else {
      return this.checkError(`You don't have any headlines on your Website.`);
    }
  }

  setKeywords(keywords) {
    if (Array.isArray(keywords)) {
      this.keywords = keywords;
    }
  }

  checkMetaDescription(document) {
    const meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      return this.checkError("No meta description element found.");
    }

    const content = meta.getAttribute("content");

    if (!content) {
      return this.checkError("The meta description is empty.");
    }

    if (content.length < 120) {
      return this.checkError(
        `The meta description is too short (${
          content.length
        } of 160 characters used). You should have at least 120 characters.`
      );
    }

    return this.checkSuccess("Your meta description is in good shape.");
  }

  checkTitle(document) {
    const titleElement = document.querySelector("title");

    if (!titleElement) {
      return this.checkError("No title element found.");
    }

    const title = titleElement.innerHTML;

    if (title.length < 30) {
      return this.checkError(
        `Your title is too short (${
          title.length
        } of suggested 50 characters). You should have at least 40 characters.`
      );
    }

    return this.checkSuccess("Your title is in good shape.");
  }

  checkKeywords(document, keywords) {
    const missing = [];
    const bodyTextLowercase = document.body.innerText.toLowerCase();

    if (keywords.length !== 0) {
      for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];
        if (!bodyTextLowercase.includes(keyword)) {
          missing.push(keyword);
        }
      }

      if (missing.length !== 0) {
        return {
          passed: false,
          message: `The following keywords are missing in the document: ${missing.join(
            ", "
          )}`
        };
      }
    }

    return this.checkSuccess("All keywords are there.");
  }

  checkSuccess(message) {
    return {
      passed: true,
      message
    };
  }

  checkError(message) {
    return {
      passed: false,
      message
    };
  }
}

export default OnPageCheck;
