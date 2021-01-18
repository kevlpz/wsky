import CategoryCard from './CategoryCard.js'
import jamesonb from '../assets/jamesonb.jpg'
import crownroyalb from '../assets/crownroyalb.jpg'
import johnnywalkerb from '../assets/johnnywalkerb.jpg'
import jimbeamb from '../assets/jimbeamb.jpg'

const Categories = () => {
    return (
        <div className="categories-container">
            <CategoryCard name="Scotch Whiskey" img={johnnywalkerb} alt="johnny walker bottle" />
            <CategoryCard name="Bourbon" img={jimbeamb} alt="jim beam bottle" />
            <CategoryCard name="Irish Whiskey" img={jamesonb} alt="jameson bottle" />
            <CategoryCard name="Canadian Whiskey" img={crownroyalb} alt="crown royal bottle" />
        </div>
    )
}

export default Categories