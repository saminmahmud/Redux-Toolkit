import React from "react";
import "./index.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";

const App = () => {
    const counters = useSelector((state) => state.counters);
    const dispatch = useDispatch();

    const handleIncrement = (counterId) => {
        dispatch(increment({ id: counterId }));
    };

    const handleDecrement = (counterId) => {
        dispatch(decrement({ id: counterId }));
    };

    return (
        <>
            <h1 className="text-5xl text-center mt-10 text-orange-400 font-bold underline mb-5">
                Simple Counter Application
            </h1>

            {counters.map((counter) => (
                <Counter 
                key={counter.id}
                count={counter.value}
                onIncrement={() => handleIncrement(counter.id)}
                onDecrement={() => handleDecrement(counter.id)}
                />
            ))}
        </>
    );
};

export default App;
