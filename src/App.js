import React, {useState}  from 'react';
import Header from './assests/Header';
import Axios from 'axios';
import './index.css';
import Recipe from './assests/Recipe.js';
import {v4 as uuidv4} from 'uuid';
import './assests/App.css';

//Using CSS styling Flexbox, Edmame API, useEffect React Hook, uuidv4, Axios to send API requests, @material-ui/icons/ArrowDownward'

function App() {
 //State Hooks
  const [Recipes, setRecipes] = useState([]) // empty array for recieving data from API for recipes
  const [query, setQuery] = useState(""); // empty string to store the query from the user
// API auth strings
  const AppID = "67558d62";
  const AppKey = "3fb3a1061f152063fd16dbf4e3776316";
  const RequesUrl = `https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${AppKey}`;
// Get Data from API function
  const getRecipeData = async () => {
    const response = await Axios.get(RequesUrl);
    //console.log(response);
    setRecipes(response.data.hits)
    setQuery('')
  };
  //Onchange function to capture the change happening in the search field
  const onChange= eventHandle => {
    setQuery(eventHandle.target.value);
  }
  //OnSubmit function to get data once the Submit button has been clicked
  const onSubmit = eventHandle => {
    eventHandle.preventDefault();
    getRecipeData();
  }

  return (
<div className="app" >
  {/* Header*/}
  <Header />
  {/* Search Bar*/}
  <div className="form">
    <form onSubmit={onSubmit}>
      <input
        className='search'
        type="text"
        placeholder="What do you wanna cook today?"
        autoComplete="off"
        onChange={onChange}
        value={query}
      />
      <input className="searchbutton" type="submit" value="Go" />
    </form>
  </div>
  {/* Recipes Cards*/}
  <div className="recipes">
    {Recipes !== [] &&Recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
  </div>
</div>
  );
}

//Create a new arrow function for the cards
export default App;
