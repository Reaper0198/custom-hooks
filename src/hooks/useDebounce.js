import { useState } from "react";

export default function useDobounce(searchQuery) {

    const [searchQuery, setSearchQuery] = useState("");

    function func(query){

        console.log("final string", searchQuery)
    }

    useEffect(()=>{
        console.log('new character added');
        const timeoutId = setTimeout(()=> func(searchQuery), 400);

        return ()=>{
            console.log("clock reset");
            clearTimeout(timeoutId);
        }
    }, [searchQuery])

    return {searchQuery, setSearchQuery};
}