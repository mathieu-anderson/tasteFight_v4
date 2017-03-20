
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratings').insert([
        {id: 1, user_id: 1, movie_id: 578,rating: 1},
        {id: 2, user_id: 1, movie_id: 280,rating: 9},
        {id: 3, user_id: 2, movie_id: 578,rating: 1},
        {id: 4, user_id: 2, movie_id:280,rating: 8},
        {id: 5, user_id: 3, movie_id: 578,rating: 10},
        {id: 6, user_id: 3, movie_id: 218,rating: 7}
      ]);
    });
};
