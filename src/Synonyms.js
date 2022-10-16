import React from "react";

export default function Synonyms(props) {
  console.log(props.synonym);
  if (props.synonym.length !== 0) {
    for(const synonym of props.synonym) {
    return (
      <ul className="Synonyms"><strong>Synonyms:</strong>
        <li>{synonym}</li>
      </ul>
    );}
  } else {
    return null;
  }
}
