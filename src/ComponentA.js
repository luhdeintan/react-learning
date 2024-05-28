import { Data, MyAge } from "./App";

const ComponentA = () => {
    return (
        <>
            <Data.Consumer>
                {(name) => {
                    return (
                        <>
                            <MyAge.Consumer>
                            <p>My name is {name}</p>
                                {(age) => {
                                        return (
                                            <p>I am {age} years old</p>
                                        )
                                    }
                                }
                            </MyAge.Consumer>
                        </>
                    )
                }}
            </Data.Consumer>
        </>
    )
};

export default ComponentA;
