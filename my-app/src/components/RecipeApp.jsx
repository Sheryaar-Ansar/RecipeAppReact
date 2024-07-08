import Header from "./RecipeHeader"
import RecipeSearch from "./RecipeSearch"
import './Recipe.css'
import { useState } from "react"
import ChickenKarachi from '../assets/chicken-karahi.jpg'


const RecipeApp =()=>{
    const [items, setItemsCount] = useState(
        [
            {
                id:1,
                title:'Chicken',
                image:{ChickenKarachi},
                button:'Read More',
            },
            {
                id:2,
                title:'Chicken',
                image:{ChickenKarachi},
                button:'Read More',
            },
            {
                id:3,
                title:'Chicken',
                image:{ChickenKarachi},
                button:'Read More',
            },
            {
                id:4,
                title:'Chicken',
                image:{ChickenKarachi},
                button:'Read More',
            },
        ]
    )
    return(
        <div className="wrapper">
            <div className="header">
                <Header/>
            </div>
            <h2>Recipe App</h2>
            <div className="searchRecipe">
                <RecipeSearch/>
            </div>
        </div>
    )
}
export default RecipeApp