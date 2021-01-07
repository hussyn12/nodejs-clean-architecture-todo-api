export const DeleteUser = (userId, {repository}) => {
    return repository.remove(userId)
}