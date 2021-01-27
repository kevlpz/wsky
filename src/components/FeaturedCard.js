const FeaturedCard = ({ name, price, img }) => {
    return(
        <div className="featured-card-container">
            <img className="featured-card-img" src={img} alt="whiskey" />
            <div className="card-info">
                <p><strong>NEW: {name}</strong></p>
                <p>{price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default FeaturedCard