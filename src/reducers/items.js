// to store state
// store can also be updated here
// each category has there own reducer file

const initialState = {
    items: []
};

const itemsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "ITEMS": 
            return {...state, items: action.items}
        default:
            return state;
    }
};

export default itemsReducer;