import React from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../features/api/apiSlice";

const Todo = ({ todo, editTodo, setEditTodo }) => {

    const { id, title, body, complete, created, updated } = todo;

    const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation(); 
    const [updateTodo, { data: EditData, isSuccess: isEditSuccess }] = useUpdateTodoMutation();

    const handleDelete = async () => {
        try {
            await deleteTodo(id);
        } catch (err) {
            console.error("Error deleting todo:", err);
        }
    };

    return (
        <div className="border-2 p-5 space-y-5 rounded-md">
            <div className="flex justify-start items-center gap-2">
                <h1 className="font-bold">completed:</h1>
                <input onChange={() => {
                    updateTodo({
                        id: id,
                        data: {
                            title: title,
                            body: body,
                            complete: !complete,
                        },
                    });
                }} checked={complete} type="checkbox" name="" id="" className="w-4 h-4" />
            </div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-md">{body}</p>

            <div className=" flex items-center gap-5 justify-end">
                {
                    !complete ? 
                    <button onClick={()=> setEditTodo(todo) } className="border-1 ring-2 px-2 py-1 bg-green-700 hover:bg-green-400 rounded-md ">
                        Edit
                    </button> : null
                }
                <button onClick={()=>handleDelete()} disabled={isDeleting} className="border-1 ring-2 px-2 py-1 bg-red-700 hover:bg-red-400 rounded-md ">
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
};

export default Todo;
