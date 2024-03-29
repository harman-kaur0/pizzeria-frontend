
const initialState = {
    categories: []
};

const categoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CATEGORIES":
            return {...state, categories: action.categories}
        default:
            return state;
    }
};

export default categoryReducer;