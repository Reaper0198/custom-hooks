import { useEffect, useState } from "react";
import useFetch2 from "../hooks/useFetch2";

export default function PollingGetPostCard() {

    const [url, setUrl] = useState(null);

    const {loading, postData, error} = useFetch2(url, 5);

    const [post, setPost] = useState(null);


    const getPost = (postId) =>{
        setUrl(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }

    return (
        <div className="flex-col border-2 m-4 p-2 rounded-lg">
            <div className="flex gap-2">
                <button className="p-1 border-2 border-black rounded-lg bg-green-300 text-white" 
                    onClick={()=>getPost(1)}>click me fetch post 1</button>
                <button className="p-1 border-2 border-black rounded-lg bg-green-300 text-white" 
                    onClick={()=>getPost(2)}>click me fetch post 2</button>
                <button className="p-1 border-2 border-black rounded-lg bg-green-300 text-white" 
                    onClick={()=>getPost(3)}>click me fetch post 3</button>
                    // fetches data every user-defined seconds, gives flag for loading, error.
            </div>
            <div>
                {postData && <p>{JSON.stringify(postData)}</p>}
                {loading && <p>Loading latest data</p>}
                {error && <p>Error occured. Could not fetch updated data.</p>}
            </div>

        </div>
    )
}