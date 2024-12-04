import React, {useState} from "react";
import Todo from "./Todo";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Form from './Form'

const Todos = () => {
    const { data, isLoading, isError, error, } = useGetTodosQuery();

    const [editTodo, setEditTodo] = useState(null);
    
    const handleNullEditTodo = () => {
        setEditTodo(null);
    }
    
    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (!isLoading && isError) {
        content = <h1 className="text-red-500">There was an error: {error}</h1>;
    }

    if (!isLoading && !isError) {
        if(data.length > 0) {
            content = data.map((todo) => <Todo key={todo.id} todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} />);
        }
    }
    
    return (
        <>
            <Form  editTodo={editTodo} setEditTodo={setEditTodo} handleNullEditTodo={handleNullEditTodo} />
            <div className={isLoading ? "flex justify-center items-center mt-24" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12"}>
                {content}
            </div>
            
        </>
    );
};

export default Todos;
