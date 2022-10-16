import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props){
    return (

        <div className="Meaning">
        <section>
            <h3>{props.meaning.partOfSpeech}</h3>{props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div><div className="Definition"><strong>Definition:</strong> {definition.definition}</div><br/>
                        <Example example = {definition.example}/>
                        <br/>
                        <Synonyms synonym={definition.synonyms} />
                        </div>
                        <hr/></div>);})}
                    </section>
        </div>
    );
}