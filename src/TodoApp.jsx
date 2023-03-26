import { useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { todoReducer } from "./hooks/todoReducer"



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


export const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer,initialState)

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
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
    
    return (
        <> 
            <div className="container border d-flex justify-content-center align-items-center">
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title text-center">ToDo</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ToDo:10 Pendientes:2</h6>
                    <TodoAdd onNewTodo = {handleNewTodo}/>
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleOnDeleteTodo}
                        />
                </div>
            </div>
            </div>
        </>
    )
}
