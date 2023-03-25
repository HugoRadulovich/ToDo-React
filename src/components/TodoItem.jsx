

export const TodoItem = ({todo}) => {
    return (
        <li>
            {todo.description}
            <button className="btn btn-danger m-2">Borrar</button>
        </li>
    )
}
