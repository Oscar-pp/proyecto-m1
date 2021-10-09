import usersModel from "../model/usersModel.js";
import bcrypt from 'bcrypt';

const register = (req, res, next) => {


    try {

        const logDataUser = req.body;

        const newUser = {

            userId: 0,
            username: logDataUser.username,
            password: logDataUser.password,
            rol: "user",
            routes: []

        }

        const result = usersModel.createUser(newUser);

        res.status(201).json(result);

    } catch (error) {
        next(error);
    }

}



// const login = async (req, res, next) => {

//     try {
//         const body = req.body;

//         if (!body.username || !body.password) {
//             next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
//         } else {
//             const user = { username: body.username, password: body.password };

//             const result = usersModel.loginUser(user);

//             if (result === undefined) {
//                 next(HttpError(400, { message: 'Username or Password incorrect' }));
//             } else {
//                 await bcrypt.compare(body.password, result.password);
//                 const token = '1234';
//                 res.status(200).json({ token: token });
//             }
//         }
//     }
//     catch (error) {
//         next(error);
//     }
// }

export default {
    register,
    //login
}