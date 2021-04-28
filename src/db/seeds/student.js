exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("student")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("student").insert([
        {
          student_id: "1",
          f_name: "rowValue1",
          l_name: "",
          faculty: "",
          department: "",
          mobile_no: "",
          email: "",
          other_contact: "",
          is_admin: true,
        },
      ]);
    });
};
