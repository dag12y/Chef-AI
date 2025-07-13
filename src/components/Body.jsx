import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai.js"

function Body(){
    const [ingredients,setIngredients]=React.useState([]);
    const [recipe, setRecipe] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    function handleDelete(index){
        setIngredients(prevIngredients=>prevIngredients.filter((_,i)=>i!=index))
    }
    async function getRecipe() {
        setLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false)
    }

    function addIngredient(formData){
        const newIngredient=formData.get('ingredient')
        newIngredient.trim() !== '' && setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
    }

    return(
        <main className="main-content">
            <section className="ingredient-input-section">
                <form className="add-ingredient-form" action={addIngredient}>
                    <input type="text" aria-label="Add ingredient" placeholder="e.g. doro wet" name="ingredient"/>
                    <button>Add ingredient</button>
                </form>
            </section>
            {ingredients.length ? <section className="ingredients-list-section"><IngredientsList ingredients={ingredients} handleDelete={handleDelete} getRecipe={getRecipe}/></section> : null}
            {(loading || recipe) && <section className="recipe-section"><ClaudeRecipe recipe={recipe} loading={loading}/></section>}
        </main>
    )
}
export default Body