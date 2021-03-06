import React, {createContext, useReducer} from "react";
import { todosReducer } from "../reducers/TodosReduce";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    // memanggil reducer
    const [todos, dispatch] = useReducer(todosReducer, [
        {text: 'Plan the family trip', id: 1},
        {text: 'Go shopping for dinner', id: 2},
        {text: 'Go for a walk', id: 3}
    ]);


    return(
        <TodoListContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
};

export default TodoListContextProvider;


    // // ini pakai state
    // // tambah data
    // const addTodo = (todo) => {
    //     setTodos([
    //         ...todos,
    //         { text : todo, id: Math.random() }
    //     ]);
    // };

    // // hapus data
    // const removeTodo = (id) => {
    //     setTodos(todos.filter((todo) => {
    //         return todo.id !== Number(id);
    //     }));
    // };