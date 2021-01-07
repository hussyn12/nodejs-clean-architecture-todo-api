import User from '../../../Domain/User/User.js'

export const CreateUser = (name, email, password, {repository}) => {
    const user = new User(null, name, email, password)
    return repository.create(user)
}