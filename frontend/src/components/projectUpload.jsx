import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import { axios } from "../utils/axios";
function ProjectUpload() {
  const [imgs, setImgs] = useState([]);
  const [projectName, setProjectName] = useState(null);
  const [projects, setProjects] = useState([]);
  const [projectInfo, setProjectInfo] = useState(null);
  const [githubLink, setGithubLink] = useState(null);
  const [featured, setFeatured] = useState(false);
  const [languages, setLanguages] = useState([
    "html",
    "json",
    "javascript",
    "react_js",
    "mongodb",
  ]);
  const [livePreviewLink, setLivePreviewLink] = useState(null);

  const onDrop = (picture) => {
    picture.map((img) => setImgs([...imgs, img]));
  };

  const upload = () => {
    console.log(imgs);
    let uploadPromises = imgs.map(async (img, i) => {
      console.log(img.name);
      const imgData = new FormData();
      imgData.append("image", img, img.name);
      imgData.append("projectName", projectName);
      imgData.append("projectInfo", projectInfo);
      imgData.append("githubLink", githubLink);
      imgData.append("languages", languages);
      imgData.append("livePreviewLink", livePreviewLink);
      imgData.append("featured", featured);
      return axios
        .post("/projectsUpload", imgData)
        .then((res) => {
          console.log(res);
          getProjects();
        })
        .catch((error) => {
          console.log(error);
        });
    });

    axios
      .call(uploadPromises)
      .then((res) => {
        // setImgs([]);
        console.log(res);
        getProjects();
      })
      .then((err) => {
        // setImgs([]);
        getProjects();
        console.log(err);
      });
  };

  const getProjects = () => {
    axios.get("/projects").then((resp) => {
      console.log(resp);
      setProjects(resp.data.reverse());
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const deleteProjects = (id) => {
    axios.delete(`/projects/${id}`).then((resp) => {
      getProjects();
      console.log(resp);
    });
  };

  const putProjects = (id) => {
    // TODOO try smooshing everything togrther later

    let uploadPromises = imgs.map(async (img, i) => {
      console.log(img.name);
      const imgData = new FormData();
      imgData.append("image", img, img.name);
      imgData.append("projectName", projectName);
      imgData.append("projectInfo", projectInfo);
      imgData.append("githubLink", githubLink);
      imgData.append("languages", languages);
      imgData.append("livePreviewLink", livePreviewLink);
      imgData.append("featured", featured);

      return axios
        .put(`/projectsUpload/${id}`, imgData)
        .then((res) => {
          console.log(res);
          getProjects();
        })
        .catch((error) => {
          console.log(error);
        });
    });

    axios
      .call(uploadPromises)
      .then((res) => {
        console.log(res);
        getProjects();
      })
      .then((err) => {
        getProjects();
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Upload Projects</h2>
      <ImageUploader
        withIcon={true}
        withPreview={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <input
        type="text"
        placeholder="project name"
        onChange={(e) => setProjectName(e.target.value)}
      />

      <br />
      <textarea
        type="text"
        placeholder="info"
        onChange={(e) => setProjectInfo(e.target.value)}
      ></textarea>
      <br />
      <input
        type="text"
        placeholder="githubLink"
        onChange={(e) => setGithubLink(e.target.value)}
      />
      <select onChange={(e) => setFeatured(e.target.value)}>
        <option value={false} defaultChecked>false</option>
        <option value={true}>true</option>
      </select>

      {/* <input
        type="text"
        placeholder="languages"
        onChange={(e) => setLanguages(e.target.value)}
      /> */}

      <input
        type="text"
        placeholder="livePreviewLink"
        onChange={(e) => setLivePreviewLink(e.target.value)}
      />

      <button onClick={upload}>upload</button>

      <br />
      <br />
      <br />
      <ul style={{ listStyle: "none" }}>
        {projects &&
          projects.map((projects, i) => (
            <li key={i}>
              image &nbsp; &nbsp;
              <div>
                <img src={projects.image} height="200" width="200" alt="" />
              </div>
              <span style={{ color: "#fff" }}>
                {"project name: " + projects.projectName + " : link : "}

                <a
                  href={projects.livePreviewLink}
                  target="_blank" without rel="noreferrer"
                  // rel="noreferrer"
                >
                  link to live preview{" "}
                </a>
                {"project-Info: " + projects.projectInfo + " : link to git: "}
                <a href={projects.githubLink} target="_blank" without rel="noreferrer">
                  link to git{" "}
                </a>
                {"featured : " + projects.featuredApp}
              </span>
              <button onClick={() => deleteProjects(projects._id)}>
                Delete
              </button>
              &nbsp;&nbsp;
              <button onClick={() => putProjects(projects._id)}>Edit</button>
              <br />
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProjectUpload;
