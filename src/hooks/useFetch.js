// this is a basix useFetch hook which fetches data on component mounting.

import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [postData, setPostData] = useState({});

    async function getPostData(){
        const response = await fetch(url);
        const data = await response.json();
        setPostData(data);
    }

    useEffect(() => {getPostData()}, []);

    return postData;

}