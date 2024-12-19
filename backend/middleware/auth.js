import jwt from "jsonwebtoken"

const userAuth =  async (req, res, next) => { 
    //retriving the token from the user request
    const { token } = req.headers

    if (!token) {
        return res.json({ success: false, message: "Token not found" })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECERET)

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id
        } else {
            return res.json({ success: false, message: "Unauthorized login. Login again" })
        }

        next()
    } catch (error) {
        return res.json({ success: false, message: "Invalid token. Login again" })
    }
}

export default userAuth