exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('ratings', (t) => {
    t.increments('id');
    t.integer('user_id');
    t.integer('movie_id');
    t.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ratings');
};
