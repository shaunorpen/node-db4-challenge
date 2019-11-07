exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredient: "Eggs" },
    { ingredient: "Flour" },
    { ingredient: "Butter" },
    { ingredient: "Onions" },
    { ingredient: "Water" },
    { ingredient: "Carrots" },
    { ingredient: "Beans" },
    { ingredient: "Beef" },
    { ingredient: "Potatoes" },
    { ingredient: "Celery" },
    { ingredient: "Beef Stock" },
    { ingredient: "Tomatoes" }
  ]);
};
