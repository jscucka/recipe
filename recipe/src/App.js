import {useEffect, useState} from 'react';

import './App.css';
import './styles/title.scss';
import './styles/recipes-list.scss';
import Spinner from './components/Spinner';
import RecipesList from './components/RecipesList';
function App() {
  const APP_ID = "0179ca3b";
  const APP_KEY = "01a1bedb90e18f0bc38519153836c6d7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(  () => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      if(data.count === 0) {
        //TODO:: Return message when there is not recipes
      }
      else {
        setRecipes(data.hits);
      }
      
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search);
    
  }
  return (
    <div className='App'>
      <h1 className='title'>Recipes</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" className="search-bar" onChange={handleChange} />
        <button type="submit" className='search-button'>Search</button>
      </form>
      {isLoading ? <Spinner /> : <RecipesList recipe={recipes}/>}
      
    </div>
  );
}

export default App;
