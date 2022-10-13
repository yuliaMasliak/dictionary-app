import React, { useState } from "react";
import axios from "axios";


export default function Dictionary() {
let [keyword, setKeyword] = useState("");


function handleResponse(response) {
    console.log(response.data);
}

function HandleKyewordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

    function search(event){
    event.preventDefault();
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={HandleKyewordChange}/>
            </form>
            <div>{keyword}</div>
        </div>
    )
}