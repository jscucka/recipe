
import Recipe from "../components/Recipe";
const RecipesList = (props) => {
    console.log(props.recipe)
    return (
        <div className='recipes-list'>
        {props.recipe.map( recept => (
          <Recipe key={Math.random()} title={recept.recipe.label} calories={Math.ceil(recept.recipe.calories)} image={recept.recipe.image}/>
        ))}
      </div>
    )
}

export default RecipesList;