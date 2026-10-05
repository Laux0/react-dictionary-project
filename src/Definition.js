import React from "react";
import "./Definition.css";
import Meaning from "./Meaning.js";

export default function Definition(props) {
  if (props.data) {
    let selectedWord = props.data.word;
    let phonetics = props.data.phonetic;
    let definition = props.data.meanings[0].definition;
    let synonym = props.data.meanings[0].synonyms;
    return (
      <div className="about-word">
        <h2 className="dictionary-word">{selectedWord}</h2>
        <p className="phonetic-sound">{phonetics}</p>
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
