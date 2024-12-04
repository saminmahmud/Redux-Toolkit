import React, { useEffect, useState} from "react";
import {
    useAddTodoMutation,
    useUpdateTodoMutation,
} from "../features/api/apiSlice";

const Form = ({ editTodo, setEditTodo, handleNullEditTodo }) => {

    const [addTodo, { data, isLoading, isError, isSuccess }] =
        useAddTodoMutation();
    const [updateTodo, { data: EditData, isSuccess: isEditSuccess }] =
        useUpdateTodoMutation();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const addTodoFunction = () => {
      
    }
    const handleSubmit = (e) => {
      e.preventDefault();
        if (!editTodo) {
            addTodo({
                title: title,
                body: body,
            });
        } else {
            updateTodo({
                id: editTodo.id,
                data: {
                    title: title,
                    body: body,
                },
            });
            handleNullEditTodo();
            setEditTodo(null);
        }
        setTitle("");
        setBody("");
    };

    const setFormForEdit = () => {
        if (editTodo) {
            setTitle(editTodo.title);
            setBody(editTodo.body);
        }
    };

    useEffect(() => {
        setFormForEdit();
    }, [editTodo]);

    return (
        <div className="w-full flex justify-center items-center my-5 text-black">
            <form
                onSubmit={(e)=>handleSubmit(e)}
                action=""
                className="w-[60%] space-y-4 p-4 rounded-md bg-gray-700"
            >
                <input
                required
                    type="text"
                    placeholder="Add title..."
                    className="border-2 p-2 rounded-md w-full"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                required
                    type="text"
                    placeholder="Add body..."
                    className="border-2 p-2 rounded-md w-full"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <div className="w-full flex justify-center item-center">
                    <button
                        type="submit"
                        className="bg-green-700 text-white p-2 rounded-md"
                    >
                        {!editTodo ? "Add Todo" : "Edit Todo"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
