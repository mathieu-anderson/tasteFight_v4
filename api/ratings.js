const express = require('express')
const router = express.Router()

module.exports = function(db) {
  router.get('/:id/', getMovieData)

  function getMovieData(req, res, next) {
    db.findMovieByID(req.params.id)
    .then((data) => res.json(data))
  }
  return router
}
