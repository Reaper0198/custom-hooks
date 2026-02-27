import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [postData, setPostData] = useState({});

    async function getPostData(){
        const response = await fetch(url);
        const data = await response.json();
        setPostData(data);
    }

    useEffect(() => {getPostData()}, [url]);

    return postData;

}