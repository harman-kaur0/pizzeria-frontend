// update state
// dispatch action to the store where state gets updated

export const fetchItems = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/items')
        .then(res => res.json())
        .then(items => dispatch({type: "ITEMS", items}))
    }
};