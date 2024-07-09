import './Recipe.css'
import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({item}) =>{
    const { title, image, button, route } = item

    return(
        <div className='card'>
            <div className="cardInfo">
                <img src={image} alt=""/>
                <h2>{title}</h2>
                <Link to={route}>                
                <button>{button}</button>
                </Link>
            </div>
        </div>
    )
}
export default RecipeList