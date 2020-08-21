import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilePic from "../assets/profile.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilePic} alt="profile-pic" className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Sarah Ibrahim", "A Full Stack Web Developer."]}
          speed={100}
          eraseDelay={500}
        />
        <Social />
      </div>
    );
  }
}
export default Home;
