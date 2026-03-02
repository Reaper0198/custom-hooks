export default function useDobounce(searchQuery) {

    function func(){
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
}