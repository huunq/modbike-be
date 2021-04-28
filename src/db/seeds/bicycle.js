exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bicycle")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("bicycle").insert([
        {
          bike_name: "56-021",
          bike_type_id: "1",
          is_available: "yes",
          detail: "",
          bike_pic: "",
          bike_eq: "",
          branch_id: "1",
        },
      ]);
    });
};
