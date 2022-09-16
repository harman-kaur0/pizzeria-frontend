

const Category = ({category, handleClick}) => {
    return (
        <div className="category">
            <a onClick={() => handleClick(category.name)}>
                <img src={category.image} alt={category.name}/>
                <h2>{category.name}</h2>
            </a>
        </div>
    )
};

export default Category;