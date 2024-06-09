import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/UserModel.js";
import bcryp from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body
    
    if(!username || !email || !password){
        throw new Error("Please fill all the inputs")
    }

    // validation email unique
    const userExists = await User.findOne({email})
    if(userExists) res.status(400).send('User already exists')

    // encryption password
    const salt = await bcryp.genSalt(10)
    const hashedPassword = await bcryp.hash(password, salt)

    const newUser = new User({username, email, password: hashedPassword})

    try {
        await newUser.save()
        // create token for 30 days
        createToken(res, newUser._ids);

        res.status(201).json({
            _id: newUser._id, 
            username: newUser.username, 
            email: newUser.email, 
            password: newUser.password, 
            isAdmin: newUser.isAdmin
        })
    } catch (error) {
        res.status(400)
        throw new Error("Invalid user data")
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    console.log( email + " " + password);

    const existingUser = await User.findOne({email})

    console.log('get users emails')

    if(existingUser){
        const isPasswordValid = await bcryp.compare(password, existingUser.password)

        if(isPasswordValid){
            createToken(res, existingUser._id)

            res.status(201).json({
                _id: existingUser._id, 
                username: existingUser.username, 
                email: existingUser.email, 
                password: existingUser.password, 
                isAdmin: existingUser.isAdmin
            })

            console.log('success login')

            return // Exit the function after sending the response
        } else {
            throw new Error("Password  or Email Invalid")
        }
    } else {
        throw new Error("Email not found")
    }
})

const logoutCurrentUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: "Logged out successfully"})
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})

    res.json(users)
})

export {createUser, loginUser, logoutCurrentUser, getAllUsers};