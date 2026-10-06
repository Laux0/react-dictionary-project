import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definition from "./Definition.js";
import Images from "./Images.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [data, setData] = useState("");
  let [image, setImage] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setData(response.data);
  }

  function handleImageResponse(response) {
    setImage(response.data.photos);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let apiKey = "83bco8b8afca3aft80c7a9a59f08542a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "83bco8b8afca3aft80c7a9a59f08542a";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary-body">
        <form className="dictionary-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleKeyword}
          />
        </form>
        <div className="suggestions">
          suggested words: sunset, book, lake...
        </div>
        <div>
          <Definition data={data} />
          <Images image={image} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
