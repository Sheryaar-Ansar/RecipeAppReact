import './Recipe.css'
import React from 'react'
import RecipeList from './RecipeList'

const RecipeMain = ({items}) =>{
    return(
        <div className='cardFlex'>
            {items.map((item)=>(
                <RecipeList 
                key={item.id}
                item={item}
                />
            ))}
        </div>
    )
}

export default RecipeMain