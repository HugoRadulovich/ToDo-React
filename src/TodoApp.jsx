import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { useTodos } from "./hooks/useTodo";




export const TodoApp = () => {

    const {todos,handleNewTodo,handleOnDeleteTodo,handleToogleTodo,todosCount,pendigTodosCount} = useTodos();
    
    return (
        <> 
            <div className="container border d-flex justify-content-center align-items-center">
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title text-center">ToDo</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ToDo:{todosCount} Pendientes:{pendigTodosCount}</h6>
                    <TodoAdd onNewTodo = {handleNewTodo}/>
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleOnDeleteTodo}
                        onToogleTodo={handleToogleTodo}
                        />
                </div>
            </div>
            </div>
        </>
    )
}
