import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"
import asyncHandler from "./asyncHandler.js"

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    // Read JWT from the 'jwt' cookie
    // the name of cookie is jwt, you can see on postman on tab bottom name cookies
    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // moongose method findById
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    } else {
        res.status(401)
        throw new Error("N0t authorized, no token")
    }
})

const authorizeAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    } else {
        res.status(401).send("Not authorized as an Admin")
    }
}

export {authenticate, authorizeAdmin}