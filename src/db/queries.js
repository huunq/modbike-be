const knex = require("knex");

module.exports = {
  bicycle: {
    getAllBike: function () {
      return knex("bicycle");
    },
    getBikeById: function (id) {
      return knex("bicycle").where("bike_id", id);
    },
    borrowBike: function (id, data) {
      return knex("bicycle")
        .where("bike_id", id)
        .update({ is_available: data })
        .returning("*");
    },
    returnBike: function (id) {
      return knex("bicycle")
        .where("bike_id", id)
        .update({ is_available: "yes" })
        .returning("*");
    },
  },
  history: {
    getAllHistory: function (id) {
      return knex("history")
        .join("bicycle", "bicycle.bike_id", "=", "history.bike_id")
        .where("history.student_id", id)
        .orderBy("history.start_date");
    },
    borrowBikeHistory: function (history) {
      return knex("history").insert(history).returning("*");
    },
    returnBikeHistory: function (id, date) {
      return knex("history")
        .where("history_id", id)
        .update({ finish_date: date })
        .returning("*");
    },
  },
  user: {
    getPersonalData: function (id) {
      return knex("student").where("student_id", id);
    },
  },
};
