const router = require('express').Router()
const {Request} = require('../db/models')
const socketio = require('socket.io')
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
  const closedSockets = await Request.findAll({
    where: {
      reqType: 'SOCKET_DISCONNECT'
    }
  })
  const closedSocketIds = closedSockets.map(socket => {
    return socket.socketId
  })
  const currentOpenSockets = openSockets.filter(socket => {
    return !closedSocketIds.includes(socket.socketId)
  })

  res.json({currentUserCount: currentOpenSockets.length})
})

router.get('/currentUserList', async (req, res, next) => {
  const openSockets = await Request.findAll({
    where: {
      reqType: 'SOCKET_CONNECTION',
    }
  })
  const closedSockets = await Request.findAll({
    where: {
      reqType: 'SOCKET_DISCONNECT'
    }
  })
  const closedSocketIds = closedSockets.map(socket => {
    return socket.socketId
  })
  const currentOpenSockets = openSockets.filter(socket => {
    return !closedSocketIds.includes(socket.socketId)
  })

  res.json({currentOpenSockets})
})