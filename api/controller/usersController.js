import usersModel from "../model/usersModel.js";
import bcrypt from 'bcrypt';
import HttpError from "http-errors";
import authHandler from '../middleware/authHandler.js';




const register = (req, res, next) => {


    try {

        const logDataUser = req.body;

        if (!logDataUser.username || !logDataUser.password) {
            next(HttpError(400, { message: "Input parameters error" }));
        } else {


            const newUser = {

                userId: 0,
                username: logDataUser.username,
                password: logDataUser.password,
                rol: "user",
                routes: []

            }

            const result = usersModel.createUser(newUser);

            if (result < 0)
                next(HttpError(400, { message: 'No possible register' }));

            res.status(201).json(result);

        }

    } catch (error) {
        next(error);
    }

}



const login = async (req, res, next) => {

    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'entry parameters error' }))
        } else {
            
            const result = usersModel.loginUser({ username: body.username });
console.log(result)
            if (result === undefined) {
                next(HttpError(401, { message: 'Username or Password incorrect' }));
            } else {
console.log(body.password, result.password)
                const passwordCorrect = await bcrypt.compare( body.password, result.password);
console.log(passwordCorrect)
                if (!passwordCorrect) {
                    
                    next(HttpError(400, { message: 'Username or Password incorrect' }));
                }
                else {
                    
                    const token = authHandler.generateToken(body.username);
                    res.status(200).json({ token: token });
                }
            }
        }
    }
    catch (error) {
        next(error);
    }

}

export default {
    register,
    login
}