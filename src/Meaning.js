import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>{props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div><strong>Definition:</strong> {definition.definition}<br/>
                        <Example example = {definition.example}/>
                        <br/>
                        <Synonyms synonym={definition.synonyms} />
                        </div>
                    </div>);})}
        </div>
    );
}