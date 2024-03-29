// to store state
// store can also be updated here
// each category has there own reducer file

const initialState = {
    items: [],
    filteredCategory: "",
    filteredItems: []
};

const itemsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "ITEMS": 
            return {...state, items: action.items}
        case "FILTERED_ITEMS":
            return {...state, filteredItems: action.filteredItems, filteredCategory: action.category}
        default:
            return state;
    }
};

export default itemsReducer;