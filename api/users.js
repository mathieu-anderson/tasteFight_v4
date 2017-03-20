const express = require('express')
const router = express.Router()

module.exports = function(db) {
  router.get('/:id/', getUserData)

  function getUserData(req, res, next) {
    db.findUserByID(req.params.id)
    .then((data) => res.json(data))
  }
  return router
}
