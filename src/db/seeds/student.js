exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("student")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("student").insert([
        {
          student_id: "1",
          f_name: "Krittaporn",
          l_name: "Asavasamrit",
          faculty: "School of Information Technology",
          department: "Information Technology",
          mobile_no: "063-392-9911",
          email: "Krittaporn.bn@mail.kmutt.ac.th",
          other_contact: "Line: _huunq",
          is_admin: true,
        },
      ]);
    });
};
