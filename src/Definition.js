import React from "react";
import "./Definition.css";

export default function Definition(props) {
  if (props.data) {
    let selectedWord = props.data.word;
    let phonetics = props.data.phonetic;
    let meaning = props.data.meanings[0].definition;
    let partOfSpeech = props.data.meanings[0].partOfSpeech;
    let synonyms = props.data.meanings[0].synonyms;
    return (
      <div className="about-word">
        <h2 className="dictionary-word">{selectedWord}</h2>
        <p class name="phonetic-sound">
          {phonetics}
        </p>
        <p className="part-of-speech">{partOfSpeech}</p>
        <p className="word-meaning">{meaning}</p>

        <p className="word-synonyms">{synonyms}</p>
      </div>
    );
  } else {
    return null;
  }
}
