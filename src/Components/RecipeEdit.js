import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import uuid from "react-uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);
  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }
  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }
  function handleIngredientAdd() {
    const newIngredient = {
      id: uuid(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }
  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlfor="name" className="recipe-edit__label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
          className="recipe-edit__input"
        />
        <label htmlfor="name" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="CookTime"
          value={recipe.cookTime}
          id="CookTime"
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          className="recipe-edit__input"
        />
        <label htmlfor="name" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          name="Servings"
          min="1"
          id="servings"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          className="recipe-edit__input"
        />
        <label htmlFor=" instructions" className="recipe-edit__label">
          Instruction
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div> </div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleIngredientAdd()}
        >
          Add ingredient
        </button>
      </div>
    </div>
  );
}
