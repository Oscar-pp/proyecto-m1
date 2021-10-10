import usersModel from "../model/usersModel.js";
import bcrypt from 'bcrypt';
import HttpError from "http-errors";
import authHandler from '../middleware/authHandler.js'

const register = async (req, res, next) => {


    try {

        const logDataUser = req.body;

        if (!logDataUser.username || !logDataUser.password) {
            next(HttpError(400, { message: "Input parameters error" }));
        } else {

            const newUser = {

                userId: 0,
                username: logDataUser.username,
                password: logDataUser.password, //await authHandler.encryptPassword(logDataUser.password),
                rol: "user",
                routes: []

            }

            const result = usersModel.createUser(newUser);


            if (result < 0)
                next(HttpError(400, { message: 'No possible register' }))

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
            next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
        } else {
            const user = { username: body.username, password: body.password };

            const result = usersModel.loginUser(user);

            if (result === undefined) {
                next(HttpError(400, { message: 'Username or Password incorrect' }));
            } else {
                await bcrypt.compare(body.password, result.password);

                res.status(200).json({ token: SECRET });
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