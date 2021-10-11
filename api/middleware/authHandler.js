import HttpError from "http-errors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const encryptPassword = async (req, res, next) => {
    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = passwordHash;
        next();

    } catch (error) {
        next(error);
    }
}


const authUser = (req, res, next) => {

    const authBearer = req.get('authorization');

    if (!authBearer) {
        next(HttpError(401, { message: 'No authorization token' }));
    } else {

        const tokenUser = authBearer.split(' ')[1];
        
        tokenUser ? next() : next(HttpError(401, { message: 'Token invalid' }))

    }

}

const generateToken = (username) => {
    //const SECRET = "HOLA"
    console.log(process.env.SECRET)
    return jwt.sign({username: username}, process.env.SECRET);

}

export default {
    authUser,
    encryptPassword,
    generateToken
};