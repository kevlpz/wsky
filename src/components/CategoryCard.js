const CategoryCard = ({ name, img, alt }) => {
    return (
        <div className="category-card-container">
            <img src={img} alt={alt} />
            <h6>{name}</h6>
        </div>
    )
}

export default CategoryCard