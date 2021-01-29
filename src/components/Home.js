import Featured from './Featured.js'
import Banner from './Banner.js'
import Categories from './Categories.js'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Featured />
            <Link to="/products/1">
                <Banner />
            </Link>
            <Categories />
        </>
    )
}

export default Home