import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
} from '../constants/securityConstants'
import {
  createAccountRequest,
  createAccountResponseFailure,
  createAccountResponseSuccess,
  loginRequest,
  loginResponseFailure,
  loginResponseSuccess,
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

  it('loginRequest should create an action', () => {

    let expected = {
      timestamp: 1,
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
      username: 'Username',
      timestamp: 1,
      type: LOGIN_RESPONSE_SUCCESS,
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
})