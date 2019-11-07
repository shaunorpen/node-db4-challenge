const db = require("../data/dbConfig");

module.exports = {
  getAllRecipes: () => {
    return db("recipes");
  },
  getShoppingList: id => {
    return db("recipe_ingredients as ri")
      .join("ingredients as i", "ri.ingredient_id", "i.id")
      .select("ri.id", "i.ingredient", "ri.quantity")
      .where({ "ri.recipe_id": id });
  },
  getInstructions: id => {
    return db("instructions")
      .select("id", "instruction")
      .where({ recipe_id: id })
      .orderBy("instruction_number");
  },
  getRecipesForIngredient: id => {
    return db("recipe_ingredients as ri")
      .join("recipes as r", "ri.recipe_id", "r.id")
      .select("r.id", "r.recipe")
      .where({ "ri.ingredient_id": id });
  }
};
