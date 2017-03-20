module.exports = function (knex) {

  return {

//users table methods
    addUser: function (table='users', newUserData) {
      return knex(table)
      .insert(newUserData)
      .then(()=>{
        return this.findUserByEmail(newUserData.email)
      })
    },

    findUserByID: function (id) {
      return knex('users')
      .select('*')
      .where('id', id)
      .then((selectedUser) => {
        return selectedUser
      })
    },

//ratings table methods
    findMovieByID: function (id) {
      return knex('ratings')
      .select('*')
      .where('movie_id', id)
      .then((selectedMovie) => {
        return selectedMovie
      })
    }

  }
}
