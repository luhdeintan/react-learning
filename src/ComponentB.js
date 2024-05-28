import { Data, MyAge } from "./App";
import { useContext } from "react";

const ComponentB = () => {
    const name = useContext(Data)
    const age = useContext(MyAge)

    return (
        <>
            <h1>My name is {name} and I am {age} years old</h1>
        </>
    )
};

export default ComponentB;
