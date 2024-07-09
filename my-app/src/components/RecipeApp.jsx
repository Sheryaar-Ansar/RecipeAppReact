import Header from "./RecipeHeader"
import RecipeSearch from "./RecipeSearch"
import './Recipe.css'
import { useState } from "react"
import ChickenKarachi from './chicken-karahi.jpg'
import MuttonChops from './mutton-chops.jpg'
import BBQ from './bbq.jpg'
import Biryani from './biryani.jpg'
import RecipeMain from "./RecipeMain"



const RecipeApp =()=>{
    const [items, setItemsCount] = useState(
        [
            {
                id:1,
                title:'Chicken Karahi',
                image: ChickenKarachi,
                button:'Read More',
                route:'/recipe/1',
            },
            {
                id:2,
                title:'Mutton Chops',
                image:MuttonChops,
                button:'Read More',
                route:'/recipe/2',

            },
            {
                id:3,
                title:'BBQ',
                image:BBQ,
                button:'Read More',
                route:'/recipe/3',

            },
            {
                id:4,
                title:'Chicken Handi Biryani',
                image:Biryani,
                button:'Read More',
                route:'/recipe/4',

            },
        ]
    )
    const [search, setSearhItems] = useState(items)
    const searchItems = (searchVal) =>{
        const searchKeywords = items.filter((item)=>(
            item.title.toLowerCase().includes(searchVal.toLowerCase())
        ))
        setSearhItems(searchKeywords)
    }
    return(
        <div className="wrapper">
            <div className="header">
                <Header/>
            </div>
            <h1>Recipe App</h1>
            <div className="searchRecipe">
                <RecipeSearch searchItm={searchItems}/>
            </div>
            <div className="recipeList">
                <RecipeMain 
                items={search}
                />
            </div>

        </div>
    )
}
export default RecipeApp