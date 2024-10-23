// 002_categories.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          user_id: 1,
          name: "Technology",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 2,
          name: "Health",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 3,
          name: "Finance",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 4,
          name: "Education",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 5,
          name: "Travel",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 6,
          name: "Lifestyle",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 7,
          name: "Food",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 8,
          name: "Sports",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 9,
          name: "Entertainment",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          user_id: 10,
          name: "Fashion",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
