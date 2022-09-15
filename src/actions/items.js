// update state
// dispatch action to the store where state gets updated

export const fetchItems = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/items')
        .then(res => res.json())
        .then(items => dispatch({type: "ITEMS", items}))
    }
};

export const filterItems = (items, category) => {
    return dispatch => {
        const filteredItems = category === "VIEW ALL" ? items : items.filter(item => item.category.name === category);
        dispatch({type: "FILTERED_ITEMS", filteredItems})
    }
};