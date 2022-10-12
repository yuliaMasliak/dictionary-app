import React, { useState } from "react";



export default function Dictionary() {
let [keyword, setKeyword] = useState("");

function HandleKyewordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

    function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword}`);
}

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={HandleKyewordChange}/>
            </form>
        </div>
    )
}