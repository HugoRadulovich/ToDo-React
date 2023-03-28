

export const TodoItem = ({todo, onDeleteTodo, onToogleTodo}) => {
    return (
        <li key={todo.id}>
             <input type="checkbox" name="vehicle1" value="Bike"></input>
            {todo.description}
            <button onClick={() => onDeleteTodo(todo.id)} 
                className="btn btn-danger m-2 ">Borrar</button>
        </li>
    )
}
