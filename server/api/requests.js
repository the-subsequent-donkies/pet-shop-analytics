const router = require('express').Router()
const {Request} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Request.findAll({
  })
    .then(requests => res.json(requests))
    .catch(next)
})

router.post('/', async (req, res, next) => {
  console.log(req.body)
  res.send({message: 'hey'})
})