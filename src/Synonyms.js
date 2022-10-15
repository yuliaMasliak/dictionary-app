import React from "react";

export default function Synonyms(props) {
  console.log(props.synonym);
  if (props.synonym.length !== 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong> {props.synonym}
      </div>
    );
  } else {
    return null;
  }
}
