const db = require("../data/dbConfig");

module.exports = {
  getAllRecipes: () => {
    return db("recipes");
  },
  getShoppingList: id => {
    return db("recipe_ingredients")
      .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
      .select("id", "ingredients.ingredient", "recipe_ingredients.quantity")
      .where({ "recipe_ingredients.recipe_id": id });
  },
  getInstructions: id => {
    return db("instructions")
      .select("id", "instruction_number", "instruction")
      .where({ recipe_id: id })
      .orderBy("instruction_number");
  }
};
