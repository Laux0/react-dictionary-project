import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  let partsOfSpeech = props.meaning.partOfSpeech;
  let wordMeaning = props.meaning.definition;
  let example = props.meaning.example;
  return (
    <div className="dictionary-definition">
      <p className="part-of-speech">{partsOfSpeech}</p>
      <p className="word-meaning">
        <strong>Definition: </strong>
        {wordMeaning}
      </p>
      <p className="example">
        <strong>Example: </strong>
        {example}
      </p>
      <ul>
        {props.meaning.synonyms?.map(function (synonym, index) {
          return (
            <li key={index}>
              <p className="word-synonyms">{synonym}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
