import React, { Component } from "react";
import Widecard from "../components/Widecard";
import project1 from "../assets/taskCoach.png";
import project2 from "../assets/portfolio.png";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Highlighted Projects</h1>
        <Widecard
          title="Task Coach"
          pic={project1}
          description="An app that lets users add their daily tasks, edit the logged task 
          and delete completed tasks. It's developed using MERN stack and 
          the power of mongoDB and CRUD operations to list, add, update and delete tasks. "
          link="https://github.com/SarahMaghawry/react-app"
        />

        <Widecard
          title="My Portfolio"
          pic={project2}
          description="A portfolio that is powered by Reactjs components, icons and simple awesome CSS styling. "
          link="https://github.com/SarahMaghawry/my-portfolio"
        />
      </div>
    );
  }
}
export default Projects;
