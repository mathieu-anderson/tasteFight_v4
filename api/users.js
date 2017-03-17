const express = require('express')
const route = express.Router()

module.exports = function(db) {
  route.get('/:id/', getUserData)

  function getUserData(req, res, next) {
    db.findUserByID('users', req.params.id)
    .then((data) => res.json(data))
  }
  return route;
}
