import barrels from '../assets/barrels.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={barrels} alt="wooden barrels" />
            <h3>The finest scotch</h3>
        </div>
    )
}

export default Banner