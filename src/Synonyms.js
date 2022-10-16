import React from "react";

export default function Synonyms(props) {
  if (props.synonym.length !== 0) {
    return (
  <div className="Synonyms">
  <strong>Synonyms:</strong>
 {props.synonym.map(function (syn, index) {
                return (
                    <div key={index}>
                        <div>{syn}
                        </div>
                    </div>);})}</div>);}
   else {
    return null;
  }
}
