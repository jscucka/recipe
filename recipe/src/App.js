import {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = "0179ca3b";
  const APP_KEY = "01a1bedb90e18f0bc38519153836c6d7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  
  useEffect(  () => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }
  return (
    <div className='App'>
      <h1>Recipes</h1>
      <form className='search-form'>
        <input type="text" className="search-bar" />
        <button type="submit" className='search-button'>Search</button>
      </form>
      {recipes.map( recept => (
        <Recipe key={Math.random()} title={recept.recipe.label} calories={Math.ceil(recept.recipe.calories)} image={recept.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
