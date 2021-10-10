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
        const logDataUser = req.body;

        if (!logDataUser.username || !logDataUser.password) {
            next(HttpError(400, { message: 'Input parameters error' }))
        } else {
            const userLogin = {

                userId: '',
                username: logDataUser.username,
                password: logDataUser.password,
                rol: "user",
                routes: []
            };

            const result = usersModel.loginUser(userLogin);

            if (result === undefined) {
                next(HttpError(400, { message: 'Username or Password incorrect' }));
            } else {
                await bcrypt.compare(logDataUser.password, result.password);

                res.status(200).json({ token: process.env.SECRET });
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