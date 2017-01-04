import {
  // GET_ACTIVE_SESSION_REQUEST,
  // GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  // GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  CLEAR_ERROR,
  GET_SESSION_INFO_REQUEST,
  GET_SESSION_INFO_RESPONSE_FAILURE,
  GET_SESSION_INFO_RESPONSE_SUCCESS,
} from './sessionConstants'

describe('session constants', () => {

  it('CLEAR_ERROR should not be undefined', () => {

    let expected = true

    let actual = undefined !== CLEAR_ERROR

    expect(actual).toEqual(expected)
  })

  // // Get active session

  // it('GET_ACTIVE_SESSION_REQUEST should not be undefined', () => {

  //   let expected = true

  //   let actual = undefined !== GET_ACTIVE_SESSION_REQUEST

  //   expect(actual).toEqual(expected)
  // })

  // it('GET_ACTIVE_SESSION_RESPONSE_FAILURE should not be undefined', () => {

  //   let expected = true

  //   let actual = undefined !== GET_ACTIVE_SESSION_RESPONSE_FAILURE

  //   expect(actual).toEqual(expected)
  // })

  // it('GET_ACTIVE_SESSION_RESPONSE_SUCCESS should not be undefined', () => {

  //   let expected = true

  //   let actual = undefined !== GET_ACTIVE_SESSION_RESPONSE_SUCCESS

  //   expect(actual).toEqual(expected)
  // })
  // Get session info

  it('GET_SESSION_INFO_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_SESSION_INFO_REQUEST

    expect(actual).toEqual(expected)
  })

  it('GET_SESSION_INFO_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_SESSION_INFO_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('GET_SESSION_INFO_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_SESSION_INFO_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })
})
