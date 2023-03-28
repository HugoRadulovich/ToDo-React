import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"


const initialState = [
    {
        id: new Date().getTime(),
    description: 'Ir al supermercado',
    done: false,
    },
    {
        id: new Date().getTime()*3,
        description: 'Dar comida a los perros',
        done: false,

    }   
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [todos,dispatch] = useReducer(todoReducer,initialState,init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);

    }

    const handleToogleTodo = (id) => {
        const action = {
            type: '[TODO] Toogle Todo',
            payload: id
        }

        dispatch(action);
    }

    const handleOnDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id,
        }

        dispatch(action)
    }

    return {
        todos,
        handleNewTodo,
        handleToogleTodo,
        handleOnDeleteTodo,
        todosCount: todos.length,
        pendigTodosCount: todos.filter(todo=>!todo.done).length,

    }
}