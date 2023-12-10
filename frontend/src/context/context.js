import { Axios } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { axios } from "../utils/axios";
import {projectData} from '../data'



export const yungContext = createContext();


const Context = ({ children }) => {
  const [about, setAbout] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState(projectData);
  const [loading, setLoading] = useState(false);

  // projects page api calls

  const getProjects = () => {
    axios
      .get("/projects")
      .then((resp) => {
        // console.log(resp);
        setProjects(resp.data.reverse());
        return resp;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return;
  };

  // experience page api calls

  const getExp = () => {
    axios
      .get("/experience")
      .then((resp) => {
        setExperiences(resp.data.reverse());
        return resp;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return;
  };

  // about page api calls

  const fetchAbout = () => {
    axios("AboutMe")
      .then((resp) => {
        setAbout(resp.data);
        // console.log(resp.data);
        return resp;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return;
  };

  // useEffect(() => {
  //   fetchAbout();
  // }, []);

  // checking if all api has been resolved

  const getAllData = async () => {
    try {
      await Axios.all([
        fetchAbout(),
        getExp(),
        getProjects(),
      ]);
    } catch (err) {
      // setTimeout(()=>{
        // getAllData()
        // setLoading(false);
      // },2000)
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);

  useEffect(() => {
    if (about && experiences && projects) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [about, experiences, projects]);

  return (
    <yungContext.Provider
      value={{
        about,
        setAbout,
        fetchAbout,
        experiences,
        setExperiences,
        getProjects,
        projects,
        loading,
        setLoading,
      }}
    >
      {children}
    </yungContext.Provider>
  );
};

export default Context;
