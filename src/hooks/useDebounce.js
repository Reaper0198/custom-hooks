import { useEffect, useState } from "react";

export default function useDebounce(delay) {

    const [searchQuery, setSearchQuery] = useState("");

    function func(query){

        console.log("final string", searchQuery)
    }

    useEffect(()=>{
        console.log('new character added');
        const timeoutId = setTimeout(()=> func(searchQuery), delay);

        return ()=>{
            console.log("clock reset");
            clearTimeout(timeoutId);
        }
    }, [searchQuery, delay])

    return {searchQuery, setSearchQuery};
}