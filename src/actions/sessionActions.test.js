import {
  CLEAR_ERROR,
  // GET_ACTIVE_SESSION_REQUEST,
  // GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  // GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  GET_SESSION_INFO_REQUEST,
  GET_SESSION_INFO_RESPONSE_FAILURE,
  GET_SESSION_INFO_RESPONSE_SUCCESS,
} from '../constants/sessionConstants'
import {
  clearError,
  // getActiveSessionRequest,
  // getActiveSessionResponseFailure,
  // getActiveSessionResponseSuccess,
  getSessionInfoRequest,
  getSessionInfoResponseFailure,
  getSessionInfoResponseSuccess,
  } from './sessionActions'

describe('session actions', () => {
  // // get active session

  // it('getActiveSessionRequest should create an action', () => {

  //   let expected = {
  //     timestamp: 1,
  //     type: GET_ACTIVE_SESSION_REQUEST,
  //   }

  //   let actual = getActiveSessionRequest(1);

  //   expect(actual).toEqual(expected)
  // })

  // it('getActiveSessionResponseFailure should create an action', () => {

  //   let expected = {
  //     error: {
  //       code: 101,
  //       message: 'User not found',
  //     },
  //     timestamp: 1,
  //     type: GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  //   }

  //   let json = { 
  //     error: {
  //       code: 101,
  //       message: 'User not found',
  //     },
  //     id: 1,
  //   }

  //   let actual = getActiveSessionResponseFailure(json)

  //   expect(actual).toEqual(expected)
  // })

  // it('getActiveSessionResponseSuccess should create an action', () => {

  //   let expected = {
  //     username: 'Username',
  //     timestamp: 1,
  //     type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  //   }

  //   let json = {
  //     result: {
  //       username: 'Username',
  //     },
  //     id: 1,
  //     type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  //   }

  //   let actual = getActiveSessionResponseSuccess(json)

  //   expect(actual).toEqual(expected)
  // })
  // get active session

  it('getSessionInfoRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      type: GET_SESSION_INFO_REQUEST,
    }

    let actual = getSessionInfoRequest(1);

    expect(actual).toEqual(expected)
  })

  it('getSessionInfoResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 101,
        message: 'User not found',
      },
      timestamp: 1,
      type: GET_SESSION_INFO_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 101,
        message: 'User not found',
      },
      id: 1,
    }

    let actual = getSessionInfoResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('getSessionInfoResponseSuccess should create an action', () => {

    let expected = {
      email: 'Email',
      isActive: true,
      timestamp: 1,
      type: GET_SESSION_INFO_RESPONSE_SUCCESS,
      username: 'Username',
    }

    let json = {
      result: {
        email: 'Email',
        isActive: true,
        username: 'Username',
      },
      id: 1,
      type: GET_SESSION_INFO_RESPONSE_SUCCESS,
    }

    let actual = getSessionInfoResponseSuccess(json)

    expect(actual).toEqual(expected)
  })

  it('clearError should create an action', () => {

    let expected = {
      timestamp: 1,
      type: CLEAR_ERROR,
    }

    let actual = clearError(1);

    expect(actual).toEqual(expected)
  })
})
