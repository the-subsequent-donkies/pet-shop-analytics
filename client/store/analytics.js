import axios from 'axios'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const GET_REQUESTS = 'GET_REQUESTS'
const GET_CURRENT_USERS = 'GET_CURRENT_USERS'
const GET_CURRENT_USER_LIST = 'GET_CURRENT_USER_LIST'

const defaultState = {
  currentUserList: [],
  requests: []
}

const getRequests = requests => ({type: GET_REQUESTS, requests})
const getCurrentUsers = currentUsers => ({type: GET_CURRENT_USERS, currentUsers})
const getCurrentUserList = currentUserList => ({type: GET_CURRENT_USER_LIST, currentUserList})

export const getRequestsServer = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/requests')
    dispatch(getRequests(data))
  }
}

export const getCurrentUsersServer = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/requests/currentUsers')
    dispatch(getCurrentUsers(data.currentUserCount))
  }
}

export const getCurrentUserListServer = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/requests/currentUserList')
    dispatch(getCurrentUserList(data.currentOpenSockets))
  }
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_REQUESTS:
      return {...state, requests: action.requests}
    case GET_CURRENT_USERS:
      return {...state, currentUsers: action.currentUsers}
    case GET_CURRENT_USER_LIST:
      return {...state, currentUserList: action.currentUserList}
    default:
      return state
  }
}