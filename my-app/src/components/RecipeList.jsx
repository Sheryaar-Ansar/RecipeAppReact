import './Recipe.css'
import React from 'react'

const RecipeList = ({item}) =>{
    const { title, image, button } = item

    return(
        <div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="title">
                <h2>{title}</h2>
                <button>{button}</button>
            </div>
        </div>
    )
}
export default RecipeList