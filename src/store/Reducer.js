const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload); 
        case "UPDATE_TODO":
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, name: action.payload.newName } : todo
            );
        default:
            return state;
    }
};

export default reducer;
