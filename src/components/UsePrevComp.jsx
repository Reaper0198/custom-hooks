import { useState } from "react";
import useIncrease from "../hooks/UseIcrease"
import usePrev from "../hooks/usePrev";

export default function UsePrevComp() {

    const [value, increseValue] = useIncrease(0, 3);

    const previousValue = usePrev(value);

    const [state, setState] = useState("");



    return (
        <div className="flex flex-col gap-2 border-2 p-2 m-4 rounded-lg">
            <div>

            <button className="w-fit border-black border-2 rounded-lg p-1 bg-purple-400 text-white" 
                onClick={()=>increseValue()}>Click me to increase</button>
            <button className="w-fit border-black border-2 rounded-lg p-1 bg-purple-400 text-white" 
                onClick={()=>setState(prev => prev+"a")}>Click me to see magic</button>
             // uses useIncrese and usePrev hook
                </div>
            <div className="flex gap-2">
                <div className="border-2 p-1"><p>cur value : {value}</p></div>
                <div className="border-2 p-1"><p>prev value : {previousValue}</p></div>
            </div>
        </div>
    )
}