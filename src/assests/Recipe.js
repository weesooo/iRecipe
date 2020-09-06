import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails.js'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Recipe({recipe}) {
    //To map title,img.ingredients
    const{label,image,ingredients} = recipe.recipe;
    //useState again for ingredients array[]
    const [Showdetails, setShowDetails] = useState(false);
    
    return (
        <div className='recipe'>
        <h2>{label}</h2>
        <img src={image} alt={label}/>
        <button className='buttn' onClick={() => setShowDetails(!Showdetails)}>Ingredients <ArrowDownwardIcon /> </button>
        {Showdetails && <RecipeDetails ingredients={ingredients} />}
        </div>
        )
}

export default Recipe
