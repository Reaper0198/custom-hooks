import { useState } from "react";

export default function useIncrease(num) {
    const [value, setValue] = useState(num);

    const increaseValue = () => {
        setValue(prev => prev+1);
    }

    return [value, increaseValue];
}