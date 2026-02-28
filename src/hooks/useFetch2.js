// this is advance fetch it handles loading, error, fetched data

import { useEffect, useState } from "react";

export default function useFetch2(url, polTime) {

    const [postData, setPostData ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const gettingData = async () => {

        try{
            if(!url) return 

            setLoading(true);
            setError(false);
            const response = await fetch(url);
            const data = await response.json();
            setPostData(data);
            setLoading(false);
        }catch(e){
            setError(true);
            setLoading(false);
        }

    }

    useEffect(() => {
        gettingData();
        const intervalId = setInterval(gettingData, polTime * 1000);

        return () => clearInterval(intervalId);
    }, [url, polTime]);

    return {
        loading,
        error,
        postData
    }

}   