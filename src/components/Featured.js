import FeaturedCard from './FeaturedCard.js'
import balvenieImg from '../assets/doublewood.jpg'
import laphroaigImg from '../assets/laphroaig10.jpg'

const Featured = () => {
    return(
        <div className="featured">
            <FeaturedCard name="BALVENIE DOUBLEWOOD" price="$69.99" img={balvenieImg} />
            <FeaturedCard name="LAPHROAIG 10" price="$49.99" img={laphroaigImg} />
        </div>
    )
}

export default Featured