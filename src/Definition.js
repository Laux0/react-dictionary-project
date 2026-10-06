import React from "react";
import "./Definition.css";
import Meaning from "./Meaning.js";

export default function Definition(props) {
  if (props.data) {
    let selectedWord = props.data.word;
    let phonetics = props.data.phonetic;
    return (
      <div className="about-word">
        <h2 className="dictionary-word">{selectedWord}</h2>
        <div className="phonetic-sound">{phonetics}</div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
