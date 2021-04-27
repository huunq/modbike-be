exports.up = function (knex) {
  return knex.schema.createTable("history", (table) => {
    table.uuid("history_id").primary();
    table.uuid("bike_id");
    table.string("student_id", 100);
    table.timestamp("start_date").defaultTo(knex.fn.now());
    table.timestamp("finish_date").defaultTo(knex.fn.now());
    table.boolean("return_ontime").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("history");
};
