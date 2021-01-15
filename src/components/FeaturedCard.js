const FeaturedCard = ({ name, img }) => {
    return(
        <div className="card-container">
            <img src={img} alt="balvenie-doublewood" />
            <div className="card-info">
                <h5>NEW: {name}</h5>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default FeaturedCard