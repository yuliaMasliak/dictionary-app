import React from "react";

export default function Phonetic(props){
    console.log(props);
    return(
    <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">Listen</a>
        <span className="transcript">{props.phonetic.text}</span>
    </div>
    );
}