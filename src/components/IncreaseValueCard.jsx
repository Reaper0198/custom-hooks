import useIncrease from "../hooks/UseIcrease"

export default function IncreaseValueCard() {

    const [value, increaseValue] = useIncrease(0);

    return (
        <div className="flex p-2 gap-2 rounded-lg border-2 m-4">
            <div className="p-1 text-center">
                value : {value}
            </div>
            <button className="p-1  rounded-lg border-2 border-black bg-red-400 text-white hover:bg-red-500 cursor-pointer"
                onClick={()=> increaseValue()}>
                <p>
                    increase value
                </p>
            </button>
        </div>
    )
}