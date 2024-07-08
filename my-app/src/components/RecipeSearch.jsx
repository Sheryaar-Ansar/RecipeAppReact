import { useState } from 'react'
import './Recipe.css'


const RecipeSearch = ({searchItm}) =>{
    const [valCount, setValCount] = useState('')
    const onchange=(e)=>{
        setValCount(e.target.value)
    }
    return(
        <div className="recipeSearch">
            <input type="text" 
            placeholder="Search Your Favourite Food Recipe"
            onChange={onchange}
            value={valCount}
            />
            <button onClick={()=>{
                searchItm(valCount)
                setValCount('')
            }}>Search</button>
        </div>
    )
}
export default RecipeSearch