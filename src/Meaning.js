import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  let partsOfSpeech = props.meaning.partOfSpeech;
  let wordMeaning = props.meaning.definition;
  return (
    <div className="dictionary-definition">
      <p className="part-of-speech">{partsOfSpeech}</p>
      <p className="word-meaning">{wordMeaning}</p>
      {props.meaning.synonyms?.map(function (synonym, index) {
        return (
          <div key={index}>
            <p className="word-synonyms">{synonym}</p>
          </div>
        );
      })}
    </div>
  );
}
