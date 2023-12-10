import React, { useState } from "react";
import "../App.css";
import AboutUpload from "./aboutUpload";
import ExperienceUpload from "./experienceUpload";
import ProjectUpload from "./projectUpload";

function Dashboard() {
  const [tab, setTab] = useState("project");
  return (
    <div style={{ color: "green" }}>
      <div className="App">
      <br />
      <br />
        <center style={{ color: "white" }}>
          <button onClick={() => setTab("project")}>Project Upload</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={() => setTab("experience")}>
            Experience Upload
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={() => setTab("about")}>About Me Upload</button>
        </center>
        {tab === "project" ? (
          <ProjectUpload />
        ) : tab === "about" ? (
          <AboutUpload />
        ) : (
          <ExperienceUpload />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
