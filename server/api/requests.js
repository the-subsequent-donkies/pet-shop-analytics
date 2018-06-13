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
  const myReq = await Request.create({...req.body})
  res.json(myReq)
})

router.get('/currentUsers', async (req, res, next) => {
  const openSockets = await Request.findAll({
    where: {
      reqType: 'SOCKET_CONNECTION',
    }
  })
  console.log(openSockets)
  const closedSockets = await Request.findAll({
    where: {
      reqType: 'SOCKET_DISCONNECT'
    }
  })
  console.log('closedSockets>>>>>>>>>>>>>>>>>', closedSockets)
  const closedSocketIds = closedSockets.map(socket => {
    return socket.socketId
  })
  const currentOpenSockets = openSockets.filter(socket => {
    return !closedSocketIds.includes(socket.socketId)
  })

  res.json({currentUserCount: currentOpenSockets.length})
})