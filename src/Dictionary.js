import React, { useState } from "react";
import axios from "axios";
import Result from  "./Result";
import Photos from "./Photos";



export default function Dictionary(props) {
let [keyword, setKeyword] = useState("create");
let [result, setResult] = useState("");
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);


function handleResponse(response) {
       setResult(response.data[0]);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function HandleKyewordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

let pexelsApiKey = "563492ad6f91700001000001b87ca942ac9049e2b50174fd31130278";
let pexeplsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = {Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexeplsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <section>
            <form onSubmit={handleSubmit}>
            <label>Enter a word to search</label>
                <input type="search" className="search-input" onChange={HandleKyewordChange} defaultValue="create"/>
            </form>
            </section>
            <Result results={result}/>
            <Photos photos={photos} />
        </div>
    )} else {
        load();
    }
}