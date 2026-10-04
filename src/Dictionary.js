import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definition from "./Definition.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "83bco8b8afca3aft80c7a9a59f08542a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary-body">
      <form className="Dictionary-form" onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={handleKeyword}
        />
      </form>
      <div>
        <Definition />
      </div>
    </div>
  );
}
