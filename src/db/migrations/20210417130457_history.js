exports.up = function (knex) {
  return knex.schema.createTable("history", (table) => {
    table.uuid("history_id").primary();
    table.foreign("bike_id").references("bicycle.bike_id");
    table.foreign("student_id").references("student.student_id");
    table.timestamp("start_date").defaultTo(knex.fn.now());
    table.timestamp("finish_date");
    table.boolean("return_ontime").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("history");
};
