// 003_modules.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("modules")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("modules").insert([
        {
          category_id: 1,
          title: "Understanding AI",
          body: "This module covers the basics of AI.",
          reference_url: "http://example.com/ai",
          solution: "Study AI concepts and applications.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 2,
          title: "Healthy Living",
          body: "Learn about nutrition and wellness.",
          reference_url: "http://example.com/health",
          solution: "Follow a balanced diet and exercise.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 3,
          title: "Investing Basics",
          body: "An introduction to investing.",
          reference_url: "http://example.com/investing",
          solution: "Start with low-risk investments.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 4,
          title: "Online Learning",
          body: "How to take courses online effectively.",
          reference_url: "http://example.com/learning",
          solution: "Create a study schedule.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 5,
          title: "Travel Tips",
          body: "Best practices for traveling safely.",
          reference_url: "http://example.com/travel",
          solution: "Research your destination.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 6,
          title: "Minimalist Living",
          body: "Embrace a minimalist lifestyle.",
          reference_url: "http://example.com/minimalism",
          solution: "Declutter your space.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 7,
          title: "Cooking Essentials",
          body: "Learn essential cooking skills.",
          reference_url: "http://example.com/cooking",
          solution: "Practice basic recipes.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 8,
          title: "Fitness Routines",
          body: "Create your own fitness routine.",
          reference_url: "http://example.com/fitness",
          solution: "Mix cardio and strength training.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 9,
          title: "Movie Recommendations",
          body: "Find the best movies to watch.",
          reference_url: "http://example.com/movies",
          solution: "Explore various genres.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          category_id: 10,
          title: "Fashion Trends",
          body: "Stay updated with the latest trends.",
          reference_url: "http://example.com/fashion",
          solution: "Follow fashion influencers.",
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
};
