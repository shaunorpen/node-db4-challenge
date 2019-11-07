exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table.string("recipe");
    })
    .createTable("ingredients", table => {
      table.increments();
      table.string("ingredient");
    })
    .createTable("recipe_ingredients", table => {
      table.increments();
      table
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes");
      table
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("ingredients");
      table.string("quantity");
    })
    .createTable("instructions", table => {
      table.increments();
      table.integer("instruction_number");
      table.string("instruction");
      table
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
