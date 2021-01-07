import UserRepository from '../../../src/Domain/User/UserRepository'
const mockUserRepository = new UserRepository()
import AccessToken from '../../../src/Application/security/AccessToken'
const MockAccessToken = class extends AccessToken {}
const mockAccessToken = new MockAccessToken()
import {GetAccessToken} from '../../../src/Application/use_cases/User/GetAccessToken'

test('Should resolve with JWT access token when credentials are ok', async () => {
    mockUserRepository.getEmail = () => {return {password: 'abc123'}}
    mockAccessToken.generate = () => 'generated-jwt-access-token'

    const token = await GetAccessToken('test@test12.com', 'abc123', {
        repository: mockUserRepository,
        accessToken: mockAccessToken
    })

    expect(token).toBe('generated-jwt-access-token')
})

test('should reject when password did not match', () => {
    mockUserRepository.getEmail = () => { return { password: 'abcd-1234' } };
  
    const promise = GetAccessToken('test@test12.com', 'wrong-password', {
      repository: mockUserRepository,
      accessToken: mockAccessToken
    });
  
    return expect(promise).rejects.toThrow('Bad Credentials');
})