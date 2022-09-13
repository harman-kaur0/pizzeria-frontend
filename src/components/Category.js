

const Category = ({category}) => {
    return (
        <div className="category">
            <a>
                <img src={category.image}/>
                <h2>{category.name}</h2>
            </a>
        </div>
    )
};

export default Category;