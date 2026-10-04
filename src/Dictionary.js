import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("null");

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary-body">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={handleKeyword}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
