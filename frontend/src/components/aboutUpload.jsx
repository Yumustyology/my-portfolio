import React, { useEffect, useState } from "react";
import { axios } from "../utils/axios";

function AboutUpload() {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [about, setAbout] = useState(null);

  const uploadAbout = () => {
    axios
      .post("AboutMe", { info: aboutInfo })
      .then((data) => {
        console.log(data);
        fetchAbout();
      })
      .catch(console.log);
  };

  const fetchAbout = () => {
    axios("AboutMe")
      .then((resp) => {
        setAbout(resp.data);
        console.log(resp.data);
      })
      .catch(console.log);
  };

  const delAbout = () => {
    axios
      .delete("AboutMe")
      .then((resp) => {
        setAbout(resp.data);
        console.log(resp.data);
      })
      .catch(console.log);
  };

  const editAbout = () => {
    axios
      .patch("AboutMe", { info: aboutInfo })
      .then((resp) => {
        setAbout(resp.data);
        console.log(resp.data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchAbout();
  }, []);
  return (
    <div>
      <br />
      <textarea onChange={(e) => setAboutInfo(e.target.value)}></textarea>
      <br />
      <br />
      <button onClick={uploadAbout}>upload about</button>
      <br />
      <br />
      <div>
        <h1>About me text</h1>
        <br />
        <button onClick={fetchAbout}>get about</button>
        <button onClick={delAbout}>Delete About</button>
        <button onClick={editAbout}>edit About</button>
        <br />
        <br />
        {about?.info}
      </div>
    </div>
  );
}

export default AboutUpload;
