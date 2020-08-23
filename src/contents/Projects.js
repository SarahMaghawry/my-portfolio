import React, { Component } from "react";
import Widecard from "../components/Widecard";
import project1 from "../assets/taskCoach.png";
import project2 from "../assets/portfolio.png";
import project3 from "../assets/RPA.png";
import project4 from "../assets/JSFapp.png";
import project5 from "../assets/BPM.png";

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
          description="A portfolio that is powered by Reactjs components, routes, icons and 
          simple awesome CSS styling. "
          link="https://github.com/SarahMaghawry/my-portfolio"
        />
        <Widecard
          title="Advanced Training Process"
          pic={project3}
          description="A complete Uipath Automation Process was implemented to login to ACME site, 
          filter and capture data based on some criteria then generate Excel Reports. "
          link="https://github.com/SarahMaghawry/RPA_Uipath"
        />
        <Widecard
          title="Java Web Application"
          pic={project4}
          description="An app that allows new bank clients to fill and send
          an Open Account Request Form remotely. Also the existing clients can perform financial 
          transactions using this app. Developed using JavaEE (JSF), Tomcat web server and MySQL Database. "
          link="https://github.com/SarahMaghawry/Banki-web-app"
        />
        <Widecard
          title="BPM Process"
          pic={project5}
          description="A process was built using IBM BPM tool that allows clients 
          to perform operations on their accounts after passing some data validations. "
          link="https://github.com/SarahMaghawry"
        />
      </div>
    );
  }
}
export default Projects;
