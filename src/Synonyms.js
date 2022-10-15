import React from "react";

export default function Synonyms(props) {
if (props.synonyms) {
    for (const item of props.synonyms) {
      let synonym = item;
    return (
      <div className="Synonyms">
     {synonym}</div>);
  } } else {
    return null;
  }
}
