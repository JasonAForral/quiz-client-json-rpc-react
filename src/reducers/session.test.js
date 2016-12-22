import session from './session'

import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
} from '../constants/securityConstants'

describe('session reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      fetchingLogin: false,
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  // Login Actions ****************

  it('should handle LOGIN_REQUEST action', () => {

    let expected = {
      error: undefined,
      fetchingLogin: true,
      timestamp: 1,
    }

    let state = {
      error: 'stuff',
    }

    let action = {
      fetchingLogin: true,
      timestamp: 1,
      type: LOGIN_REQUEST,
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_RESPONSE_FAILURE action', () => {

    let expected = {
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      fetchingLogin: false,
      timestamp: 2,
    }

    let state = {
      timestamp: 1,
      fetchingLogin: true,
    }

    let action = {
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      fetchingLogin: false,
      timestamp: 2,
      type: LOGIN_RESPONSE_FAILURE,
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_RESPONSE_SUCCESS action', () => {

    let expected = {
      fetchingLogin: false,
      timestamp: 2,
      username: 'HatTrick',
    }

    let state = {
      timestamp: 1,
      fetchingLogin: true,
    }

    let action = {
      fetchingLogin: false,
      timestamp: 2,
      type: LOGIN_RESPONSE_SUCCESS,
      username: 'HatTrick',
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  // Create Account Actions ****************

  it('should handle CREATE_ACCOUNT_REQUEST action', () => {

    let expected = {
      timestamp: 2,
    }

    let state = {
      timestamp: 1,
    }

    let action = {
      timestamp: 2,
      type: CREATE_ACCOUNT_REQUEST,
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_ACCOUNT_RESPONSE_FAILURE action', () => {

    let expected = {
      error: {
        code: 30,
        message: 'Username Exists',
      },
      timestamp: 1,
    }

    let state = {
      timestamp: 0,
    }

    let action = {
      error: {
        code: 30,
        message: 'Username Exists',
      },
      timestamp: 1,
      type: CREATE_ACCOUNT_RESPONSE_FAILURE,
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_ACCOUNT_RESPONSE_SUCCESS action', () => {

    let expected = {
      timestamp: 2,
      username: 'Username',
    }

    let state = {
      timestamp: 1,
    }

    let action = {
      timestamp: 2,
      type: CREATE_ACCOUNT_RESPONSE_SUCCESS,
      username: 'Username',
    }

    let actual = session(state, action)

    expect(actual).toEqual(expected)
  })
})