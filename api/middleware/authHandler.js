import HttpError from "http-errors";
import bcrypt from 'bcrypt';



const encryptPassword = async (req, res, next) => {
    try {
        console.log(req.body);
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
        console.log(passwordHash);
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

        const tokenUser = authBearer.split(' ').authBearer[1];
        tokenUser ? next() : next(HttpError(401, { message: 'Token invalid' }))

    }

}

export default {
    authUser,
    encryptPassword
};