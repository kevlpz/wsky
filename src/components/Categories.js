import CategoryCard from './CategoryCard.js'
import jamesonb from '../assets/jamesonb.jpg'
import crownroyalb from '../assets/crownroyalb.jpg'
import johnnywalkerb from '../assets/johnnywalkerb.jpg'
import jimbeamb from '../assets/jimbeamb.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories-container">
            <Link to="/products/1" className="link">
                <CategoryCard name="Scotch Whiskey" img={johnnywalkerb} alt="johnny walker bottle" />
            </Link>
            <Link to="/products/2" className="link">
                <CategoryCard name="Bourbon" img={jimbeamb} alt="jim beam bottle" />
            </Link>
            <Link to="/products/3" className="link">
                <CategoryCard name="Irish Whiskey" img={jamesonb} alt="jameson bottle" />
            </Link>
            <Link to="/products/4" className="link">
                <CategoryCard name="Canadian Whiskey" img={crownroyalb} alt="crown royal bottle" />
            </Link>
        </div>
    )
}

export default Categories