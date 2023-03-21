import { useForm } from "../helpers/useForm"


export const TodoAdd = () => {

    const {description, onIpuntChange, onResetForm} = useForm({
        description:'',
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(description);
    }

    return (
        <form className="onFormSubmit">
            <input type="text" 
            className="rounded"
            placeholder="Ingrese ToDo"
            name = 'description'
            value={description}
            onChange={onIpuntChange}
            />
            <button className="btn btn-danger m-2">Agregar</button>
        </form>
    )
}
