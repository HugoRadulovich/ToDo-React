

export const TodoItem = ({todo, onDeleteTodo}) => {
    return (
        <li key={todo.id}>
            {todo.description}
            <button onClick={() => onDeleteTodo(todo.id)} 
                className="btn btn-danger m-2 ">Borrar</button>
        </li>
    )
}
