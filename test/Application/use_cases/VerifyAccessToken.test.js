import AccessToken from '../../../src/Application/security/AccessToken'
const mockAccessToken = new AccessToken()
import {VerifyAccessToken} from '../../../src/Application/use_cases/User/VerifyAccessToken'

test('should resolve with the decoded user data (ID) when OAuth JWT access token is valid', async () => {
  
  mockAccessToken.decode = () => {
    return { uid: 1234 }
  }

  const result = await VerifyAccessToken('some-jwt-access-token', { accessToken: mockAccessToken })

  expect(result).toEqual({ uid: 1234 })
})

test('should throw an Error when OAuth JWT access token is invalid', () => {
  expect(() => {
    
    mockAccessToken.decode = () => null

    VerifyAccessToken('a-wrong-jwt-access-token', { accessToken: mockAccessToken })
  }).toThrowError('Invalid access token')
})