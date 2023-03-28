

export const TodoItem = ({todo, onDeleteTodo, onToogleTodo}) => {
    return (
        <li key={todo.id}>
             <span onClick={() => onToogleTodo(todo.id)} className={`aling-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                >{todo.description}</span>
            <button onClick={() => onDeleteTodo(todo.id)} 
                className="btn btn-danger m-2 ">Borrar</button>
        </li>
    )
}
