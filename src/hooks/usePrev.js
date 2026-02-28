import { useEffect, useRef } from "react";

export default function usePrev(value) {

    const prevValue = useRef(null);

    useEffect(()=>{
        prevValue.current = value;
    }, [value])

    return prevValue.current;
}