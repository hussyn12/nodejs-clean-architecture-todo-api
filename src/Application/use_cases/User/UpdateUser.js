import User from '../../../Domain/User/User.js'

export const UpdateUser = (userId, name, email, password, {repository}) => {
    const user = new User(userId, name, email, password)
    return repository.update(user)
}