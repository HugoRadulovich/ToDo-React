

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]


        case '[TODO] Toogle Todo':
            return[
                initialState.map(todo =>{
                    if(todo.id === id){
                        return{
                            ...todo,
                            done: !todo.done
                        }
                    }
                })
            ]

        case '[TODO] Delete Todo':
            return[
                initialState.filter(todo => todo.id !== action.payload),
            ]
            

    
     return todo;
    }
}