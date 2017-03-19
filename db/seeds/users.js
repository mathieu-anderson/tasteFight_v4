
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Mathieu', email:'mathieu@mathieu.com', password: 'mathieu@mathieu.com'},
        {id: 2, username: 'Katherine', email:'katherine@katherine.com', password: 'katherine@katherine.com'},
        {id: 3, username: 'Thibault', email:'thibault@thibault.com', password: 'thibault@thibault.com'}
      ]);
    });
};
