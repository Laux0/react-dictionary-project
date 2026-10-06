import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  let partsOfSpeech = props.meaning.partOfSpeech;
  let wordMeaning = props.meaning.definition;
  let example = props.meaning.example;
  let exampleHTML = null;

  if (example) {
    exampleHTML = (
      <div className="example">
        <strong>Example: </strong>
        {example}
      </div>
    );
  }

  return (
    <div className="dictionary-definition">
      <section>
        <div className="part-of-speech">{partsOfSpeech}</div>
        <div className="word-meaning">
          <strong>Definition: </strong>
          {wordMeaning}
        </div>
        <div className="exampleHTML">{exampleHTML}</div>
      </section>
      <section className="list">
        <ul>
          {props.meaning.synonyms?.map(function (synonym, index) {
            return (
              <li className="word-synonyms" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
