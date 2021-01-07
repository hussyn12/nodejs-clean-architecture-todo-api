import User from '../../../src/Domain/User/User'
import UserRepository from '../../../src/Domain/User/UserRepository'
const mockUserRepository = new UserRepository()
import {CreateUser} from '../../../src/Application/use_cases/User/CreateUser'

test('should resolve with the newly persisted User (augmented with an ID)', async () => {
  
  const persistedUser = new User('john doe', 'test12@test.com', 'password')
  mockUserRepository.create = jest.fn(() => persistedUser)

  const user = await CreateUser('john doe', 'test12@test.com', 'password', { repository: mockUserRepository })

  expect(mockUserRepository.create).toHaveBeenCalledWith(new User(null, 'john doe', 'test12@test.com', 'password'))
  expect(user).toEqual(persistedUser)
})