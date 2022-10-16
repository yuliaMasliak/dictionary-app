import React, { useState } from "react";
import axios from "axios";
import Result from  "./Result";


export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [result, setResult] = useState("");
let [loaded, setLoaded] = useState(false);


function handleResponse(response) {
    console.log(response.data);
       setResult(response.data[0]);
}

function HandleKyewordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event){
    event.preventDefault();
    search();
}
function load() {
    setLoaded(true);
    search();
}
if (loaded) {
    return(
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={HandleKyewordChange} defaultValue={props.defaultKeyword}/>
            </form>
            <Result results={result}/>
        </div>
    )} else {
        load();
    }
}