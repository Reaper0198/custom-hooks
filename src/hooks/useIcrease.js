import { useState } from "react";

export default function useIncrease(num, increaseBy) {
    const [value, setValue] = useState(num);

    const increaseValue = () => {
        setValue(prev => (prev+increaseBy));
    }

    return [value, increaseValue];
}