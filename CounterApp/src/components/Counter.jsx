import React from "react";

const Counter = ({ count, onIncrement, onDecrement}) => {
    return (
        <div className="w-full my-10 flex justify-center items-center">
            <div className="border-2 border-white w-[50%] p-4">
                
                <div className="text-center">
                    
                    <span className="font-bold text-4xl">{count}</span>
                    <div className="space-x-5 mt-4">
                        <button onClick={onIncrement} className="border-2 px-3 py-2 rounded-md hover:bg-neutral-300 focus:ring-1 ">
                            ➕
                        </button>
                        <button onClick={onDecrement} className="border-2 px-3 py-2 rounded-md hover:bg-neutral-300 focus:ring-1 ">
                            ➖
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counter;
