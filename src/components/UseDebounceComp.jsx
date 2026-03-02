import { useState } from "react"
import useDebounce from "../hooks/useDebounce";

export default function UseDebounceComp() {

    const {searchQuery, setSearchQuery} = useDebounce(800);

    function handleInput(e){
        setSearchQuery(e.target.value);
    }

    function handleSearch(){
        console.log('search this', searchQuery);
    }

    return (
        <div className="flex gap-2 border-2 rounded-lg m-4 p-2">
            <input className="border-2 rounded-lg p-1 border-black"
                type="text" value={searchQuery} onChange={handleInput}/>
            <button className="p-1 rounded-lg border-2 bg-yellow-600 text-white border-black"
                onClick={handleSearch}>Search</button>
            // search uses useDebounce hook to optimise search operation
        </div>
    )
}