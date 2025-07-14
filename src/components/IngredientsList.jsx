import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function IngredientsList(props){
    const ingredientListItems=props.ingredients.map((ingredient,index)=>(
        <li key={ingredient + index} className="ingredient-pill">
            {ingredient} <button onClick={()=>props.handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
        </li>
    ));
    return(
        <section>
            <h2>Ingredients on hand :</h2>
            <ul className="ingredients-list">
                {ingredientListItems}
            </ul>
            {props.ingredients.length>3 ?
            <div className="get-recipe-container" ref={props.ref}>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="get-recipe-btn" onClick={props.getRecipe}>
                    <span role="img" aria-label="chef">👨‍🍳</span> Get a recipe
                </button>
            </div>:null}
        </section>
    )
}