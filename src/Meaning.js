import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  let partsOfSpeech = props.meaning.partOfSpeech;
  let wordMeaning = props.meaning.definition;
  let example = props.meaning.example;
  let exampleHTML = null;

  if (example) {
    exampleHTML = (
      <p className="example">
        <strong>Example: </strong>
        {example}
      </p>
    );
  }

  return (
    <div className="dictionary-definition">
      <section>
        <p className="part-of-speech">{partsOfSpeech}</p>
        <p className="word-meaning">
          <strong>Definition: </strong>
          {wordMeaning}
        </p>
        <p className="exampleHTML">{exampleHTML}</p>
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
