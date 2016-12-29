import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE_FAILURE,
  LOGOUT_RESPONSE_SUCCESS,
} from './securityConstants'

describe('security constants', () => {
  it('CREATE_ACCOUNT_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== CREATE_ACCOUNT_REQUEST

    expect(actual).toEqual(expected)
  })

  it('CREATE_ACCOUNT_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== CREATE_ACCOUNT_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('CREATE_ACCOUNT_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== CREATE_ACCOUNT_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })

  it('LOGIN_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGIN_REQUEST

    expect(actual).toEqual(expected)
  })

  it('LOGIN_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGIN_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('LOGIN_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGIN_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })

  it('LOGOUT_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGOUT_REQUEST

    expect(actual).toEqual(expected)
  })

  it('LOGOUT_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGOUT_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('LOGOUT_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== LOGOUT_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })
})