exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe: "Cake" },
    { recipe: "Soup" },
    { recipe: "Stew" }
  ]);
};
