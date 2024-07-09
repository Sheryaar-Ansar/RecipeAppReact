import ChickenKarahi from './chicken-karahi.jpg'
import './Recipe.css'

const RecipeKarahi = () =>{
    return(
        <div className='mainCol'>
            <div className="imageCol">
                <img src={ChickenKarahi} alt="" />
            </div>
            <div className="desCol">
                <h2>Chicken Karahi</h2>
                <p>Ingredients</p>
                <p>Instruction</p>
                <p>Cooking Time</p>
            </div>
        </div>
    )
}
export default RecipeKarahi