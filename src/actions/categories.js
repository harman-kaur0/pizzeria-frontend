

export const fetchCategories = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/categories")
        .then(res => res.json())
        .then(categories => dispatch({type: "CATEGORIES",categories}))
    }
};