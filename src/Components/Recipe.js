import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

const Recipe = (props) => {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            onClick={() => handleRecipeSelect(id)}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">CookTime</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="btn btn--danger">Servings:</span>
        <span className="btn btn--value recipe__instruction">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions</span>
        <div className="recipe__value recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div>
        <span>Ingredients:</span>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
};

export default Recipe;
