import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/SarahMaghawry"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/zaraHmaghawry"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/kossa12sag"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://linkedin.com/in/sarah-maghawry"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}
export default Social;
