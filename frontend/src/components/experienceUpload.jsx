import React, { useEffect, useState } from "react";
import { axios } from "../utils/axios";
// import {io} from "socket.io-client"

function ExperienceUpload() {
  const [companyName, setCompanyName] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [role, setRole] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [tagName, setTagname] = useState(null);
  const [country, setCountry] = useState(null);

  // const socket = io("http://localhost:5000");

  const uploadExp = () => {
    axios
      .post("/experience", {
        companyName,
        tasks,
        role,
        toDate,
        fromDate,
        tagName,
        country,
      })
      .then((resp) => {
        getExp();
        alert('experience upoaded')
        console.log(resp);
      });
  };

  useEffect(() => {
    getExp();
  }, [experiences]);

  const getExp = () => {
    axios.get("/experience").then((resp) => setExperiences(resp.data));
  };

  const deleteExp = (id) => {
    axios.delete(`/experience/${id}`).then((resp) => {
      getExp();
      console.log(resp);
    });
  };

  const patchExp = (id) => {
    axios
      .patch(`/experience/${id}`, {
        companyName,
        tasks,
        role,
        toDate,
        fromDate,
        tagName,
        country,
      })
      .then((resp) => {
        getExp();
        console.log(resp);
      });
  };

  // socket.on("connect", () => {
  //   console.log(socket.id);
  // });

  return (
    <div>
      <center>
        <h2>Upload experience</h2>
      </center>
      <div>
        <input
          type="text"
          placeholder="company name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label>
          from <br />
        </label>
        <input
          type="month"
          id="start"
          name="start"
          min="2016-01"
          placeholder="date"
          onChange={(e) => {
            console.log(e);
            setFromDate(e.target.value);
          }}
        />
      </div>
      <div>
        <label>
          to <br />
        </label>
        <input
          type="month"
          id="start"
          name="start"
          min="2016-01"
          placeholder="date"
          onChange={(e) => {
            console.log(e);
            setToDate(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Tasks"
          onChange={(e) => setTasks(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="text"
          placeholder="role"
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="tagname"
          onChange={(e) => setTagname(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      
      <br />
      <button onClick={uploadExp} style={{color:'#fff'}}>Upload experience</button>
      <br />

      <br />
      <button onClick={getExp}>get experience</button>
      <br />
      <br />
      <center>
        <h2 onClick={() => console.log(experiences)}>Experience</h2>
      </center>
      <ul style={{ listStyle: "none" }}>
        {experiences &&
          experiences.map((experience, i) => (
            <li key={i}>
              {experience.companyName +
                " : info : \n" +
                experience.tasks +
                " : role : \n" +
                experience.role +
                " toDate : \n" +
                experience.toDate+
                " fromDate : \n" +
                experience.fromDate +
                " toDate : \n" +
                experience.tagName+
                " fromDate : \n" +
                experience.country}
              <button onClick={() => deleteExp(experience._id)}>Delete</button>
              &nbsp;&nbsp;
              <button onClick={() => patchExp(experience._id)}>Edit</button>
              <br />
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ExperienceUpload;
