exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      recipe_id: 1,
      instruction_number: 1,
      instruction: "Mix everything together"
    },
    {
      recipe_id: 1,
      instruction_number: 2,
      instruction: "Cook for 30mins at 180 degrees"
    },
    {
      recipe_id: 2,
      instruction_number: 1,
      instruction: "Chop everything finely"
    },
    { recipe_id: 2, instruction_number: 2, instruction: "Mix it all together" },
    {
      recipe_id: 2,
      instruction_number: 3,
      instruction: "Simmer on the stove for 20 mins"
    },
    { recipe_id: 3, instruction_number: 1, instruction: "Chop everything up" },
    {
      recipe_id: 3,
      instruction_number: 2,
      instruction: "Put in an ovenproof pot"
    },
    {
      recipe_id: 3,
      instruction_number: 3,
      instruction: "Stew in the oven for 1 hour on low"
    }
  ]);
};
