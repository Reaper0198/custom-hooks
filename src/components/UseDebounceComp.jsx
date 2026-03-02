import { useState } from "react"
import useDebounce from "../hooks/useDebounce";

export default function UseDebounceComp() {

    const {searchQuery, setSearchQuery} = useDebounce();

    function handleInput(e){
        setSearchQuery(e.target.value);
    }

    function handleSearch(){
        console.log('search this', searchQuery);
    }

    return (
        <div className="flex border-2 rounded-lg m-4 p-2">
            <input type="text" value={searchQuery} onChange={handleInput}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}