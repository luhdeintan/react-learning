import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" });

    // set JWT as HTTP-Only Cookie for 30 days
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',  // use secure cookies in production
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000  // 30 days in milliseconds
    });

    console.log(token);

    // return token if needed elsewhere
    return token;
};

export default generateToken;
