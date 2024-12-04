import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000",
    }),

    tagTypes: ["posts", "post"],
    
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos/",
            providesTags: ["todos"],
        }),

        getTodo: builder.query({
            query: (id) => `/todos/${id}/`,
            providesTags: (result, error, arg) => [{type:"todo", id:arg}],
        }),

        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: "/todos/",
                method: "POST",
                body: newTodo,
            }),
            invalidatesTags: ["todos"],
        }),

        updateTodo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/todos/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["todos"],
        }),

        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["todos"],
        }),

    })

})


export const { 
    useGetTodosQuery, 
    useGetTodoQuery, 
    useAddTodoMutation, 
    useUpdateTodoMutation, 
    useDeleteTodoMutation 
} = apiSlice;








// post/gets : http://127.0.0.1:8000/post/
// get/edit/delete : http://127.0.0.1:8000/post/1/
