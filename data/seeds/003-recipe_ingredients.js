exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: "3" },
    { recipe_id: 1, ingredient_id: 2, quantity: "300g" },
    { recipe_id: 1, ingredient_id: 3, quantity: "100g" },
    { recipe_id: 2, ingredient_id: 4, quantity: "1" },
    { recipe_id: 2, ingredient_id: 5, quantity: "500ml" },
    { recipe_id: 2, ingredient_id: 6, quantity: "2 large" },
    { recipe_id: 2, ingredient_id: 7, quantity: "1 400g can" },
    { recipe_id: 3, ingredient_id: 8, quantity: "300g diced" },
    { recipe_id: 3, ingredient_id: 9, quantity: "300g diced" },
    { recipe_id: 3, ingredient_id: 10, quantity: "2 sticks, thinly sliced" },
    { recipe_id: 3, ingredient_id: 11, quantity: "500ml" },
    { recipe_id: 3, ingredient_id: 12, quantity: "4 large, chopped" }
  ]);
};
