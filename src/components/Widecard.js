import React, { Component } from "react";
class Widecard extends Component {
  render() {
    return (
      <div className="widecard">
        <div className="compdet">
          <h3>{this.props.title}</h3>
          <img
            alt="projects"
            src={this.props.pic}
            style={{ width: 600, height: 290 }}
          ></img>
          <p className="secondtext">
            {this.props.description}
            {
              <a
                href={this.props.link}
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "blue" }}
              >
                Github Repo
              </a>
            }
          </p>
        </div>
      </div>
    );
  }
}
export default Widecard;
