import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  GET_ACTIVE_SESSION_REQUEST,
  GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE_FAILURE,
  LOGOUT_RESPONSE_SUCCESS,
} from '../constants/securityConstants'
import {
  createAccountRequest,
  createAccountResponseFailure,
  createAccountResponseSuccess,
  getActiveSessionRequest,
  getActiveSessionResponseFailure,
  getActiveSessionResponseSuccess,
  loginRequest,
  loginResponseFailure,
  loginResponseSuccess,
  logoutRequest,
  logoutResponseFailure,
  logoutResponseSuccess,
} from './securityActions'

describe('security actions', () => {
  it('createAccountRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      type: CREATE_ACCOUNT_REQUEST,
    }

    let actual = createAccountRequest(1);

    expect(actual).toEqual(expected)
  })

  it('createAccountResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 10,
        message: 'Username exists',
      },
      timestamp: 1,
      type: CREATE_ACCOUNT_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 10,
        message: 'Username exists',
      },
      id: 1,
    }

    let actual = createAccountResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('createAccountResponseSuccess should create an action', () => {

    let expected = {
      result: {},
      timestamp: 1,
      type: CREATE_ACCOUNT_RESPONSE_SUCCESS,
    }

    let json = {
      result: {},
      id: 1,
      type: CREATE_ACCOUNT_RESPONSE_SUCCESS,
    }

    let actual = createAccountResponseSuccess(json)

    expect(actual).toEqual(expected)
  })

  // get active session

  it('getActiveSessionRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      type: GET_ACTIVE_SESSION_REQUEST,
    }

    let actual = getActiveSessionRequest(1);

    expect(actual).toEqual(expected)
  })

  it('getActiveSessionResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 10,
        message: 'Username exists',
      },
      timestamp: 1,
      type: GET_ACTIVE_SESSION_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 10,
        message: 'Username exists',
      },
      id: 1,
    }

    let actual = getActiveSessionResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('getActiveSessionResponseSuccess should create an action', () => {

    let expected = {
      result: {},
      timestamp: 1,
      type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
    }

    let json = {
      result: {},
      id: 1,
      type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
    }

    let actual = getActiveSessionResponseSuccess(json)

    expect(actual).toEqual(expected)
  })

  it('loginRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      fetchingLogin: true,
      type: LOGIN_REQUEST,
    }

    let actual = loginRequest(1);

    expect(actual).toEqual(expected)
  })

  it('loginResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      fetchingLogin: false,
      timestamp: 1,
      type: LOGIN_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      id: 1,
    }

    let actual = loginResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('loginResponseSuccess should create an action', () => {

    let expected = {
      fetchingLogin: false,
      timestamp: 1,
      type: LOGIN_RESPONSE_SUCCESS,
      username: 'Username',
    }

    let json = {
      result: {
        username: 'Username',
      },
      id: 1,
      type: LOGIN_RESPONSE_SUCCESS,
    }

    let actual = loginResponseSuccess(json)

    expect(actual).toEqual(expected)
  })

  it('logoutRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      fetchingLogout: true,
      type: LOGOUT_REQUEST,
    }

    let actual = logoutRequest(1);

    expect(actual).toEqual(expected)
  })

  it('logoutResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 21,
        message: 'Not logged in',
      },
      fetchingLogout: false,
      timestamp: 1,
      type: LOGOUT_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 21,
        message: 'Not logged in',
      },
      id: 1,
    }

    let actual = logoutResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('logoutResponseSuccess should create an action', () => {

    let expected = {
      fetchingLogout: false,
      timestamp: 1,
      type: LOGOUT_RESPONSE_SUCCESS,
    }

    let json = {
      result: {},
      id: 1,
      type: LOGOUT_RESPONSE_SUCCESS,
    }

    let actual = logoutResponseSuccess(json)

    expect(actual).toEqual(expected)
  })
})
