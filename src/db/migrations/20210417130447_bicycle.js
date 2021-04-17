exports.up = function (knex) {
  return knex.schema.createTable("bicycle", (table) => {
    table.uuid("bike_id").primary();
    table
      .enum("is_available", ["yes", "no", "fix"])
      .notNullable()
      .defaultTo("yes");
    table.string("detail", 1000);
    table.string("bike_pic", 1000);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bicycle");
};
