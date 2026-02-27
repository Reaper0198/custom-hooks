import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function GetPostCard() {

    const [postData, setPostData] = useState(null);

        let data = useFetch("https://jsonplaceholder.typicode.com/posts/1");

        const getData = () => {
            data = JSON.stringify(data);
            setPostData(data);
        }



    return (
        <div className="flex-col p-2 m-5 border-2 rounded-lg content-center">
            <button 
                className="border-2 border-black bg-blue-400 p-1 rounded-lg text-white"
                onClick={()=>getData()} >
                    Click me to get Post data</button>
            <div className="p-2">
                {postData}
            </div>
        </div>
    )
}