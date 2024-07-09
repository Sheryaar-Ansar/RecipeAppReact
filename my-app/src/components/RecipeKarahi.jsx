import ChickenKarahi from './chicken-karahi.jpg'
import './Recipe.css'
import Header from './RecipeHeader'


const RecipeKarahi = () => {
    return (
        <div className="mainR">
            <Header />
            <div className="bg-opacity">
                <div className='mainCol'>
                    <div className="imageCol">
                        <img src={ChickenKarahi} alt="" />
                    </div>
                    <div className="desCol">
                        <h1>Chicken Karahi</h1>
                        <p><h4><u>Ingredients:</u></h4>
                            <ul>
                                <li>⅓ cup oil</li>
                                <li>1 red onion chopped</li>
                                <li>1 whole chicken skinless and cut into 14-16 pieces</li>
                                <li>⅓ cup plain yogurt</li>
                                <li>11/2 teaspoon cumin</li>
                                <li>2 teaspoon coriander seeds crushed</li>
                                <li>¼ cup water</li>
                                <li>2-3 green chilies slit lengthwise</li>
                            </ul>
                        </p>
                        <p><h4><u>Instructions</u></h4>
                            <ol>
                                <li>In a wok over medium heat, add oil.</li>
                                <li>Once oil is hot, toss in the chopped onions and fry for 6-7 minutes or until the edges start to brown.</li>
                                <li>Next, add the rinsed chicken pieces and stir until combined with the onion.</li>
                                <li>Add yogurt, cumin, coriander seeds, red chilli powder, salt, pepper and ginger garlic paste and stir until the chicken pieces are coated.</li>
                                <li>After 20 minutes, remove the lid and turn the flame to high and let the water evaporate.</li>
                                <li>Once the water evaporates about 10-15 minutes, start to stir again.</li>
                                <li>You'll notice that the curry will release oil and you'll see a lovely sheen around the edge of the wok. At this point, add in some more cilantro and chilli and pop the lid back on and turn the flame to the lowest possible setting for 5-10 minutes. This is called the "dum" stage which is important to finish off the Karahi.</li>
                                <li>Enjoy hot with pita bread or naan! Serves 5-6 people.</li>
                            </ol>
                        </p>
                        <p><strong>Cooking Time:</strong> 2-3 Hours </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecipeKarahi