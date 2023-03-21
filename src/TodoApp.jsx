import { TodoAdd } from "./components/TodoAdd"



export const TodoApp = () => {

    
    return (
        <> 
            <div className="container border d-flex justify-content-center align-items-center">
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title text-center">ToDo</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ToDo: Pendientes:</h6>
                    <TodoAdd/>
                </div>
            </div>
            </div>
        </>
    )
}
