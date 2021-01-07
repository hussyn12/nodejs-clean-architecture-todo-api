export const VerifyAccessToken = (header, {accessToken}) => {
    const decoded = accessToken.decode(header)
    if (!decoded) {
        throw new Error('Invalid access token')
     }
    return { uid: decoded.uid }
}