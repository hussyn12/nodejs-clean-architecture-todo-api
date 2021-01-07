export const GetAccessToken = async (email, password, {repository, accessToken}) => {
    const user = await repository.getEmail(email)
    if(!user || user.password !== password) {
        throw new Error("Bad Credentials")
    }
    return accessToken.generate({uid: user.id})
}