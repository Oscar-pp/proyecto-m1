import adminModel from '../model/adminModel.js';
import HttpError from 'http-errors';

const getAllUsers = (req, res) => {

    const getUsers = adminModel.getUsers();
    res.status(200).json(getUsers);

}

const deleteOneUserById = (req, res, next) => {

    const idUser = req.body.userId;

    if (!idUser) {
        next(HttpError(401, { message: 'Id incorrect' }));

    } else {
        const consulta = adminModel.getId(idUser);
        
        if (consulta === 'undefined') {
            next(HttpError(404, { message: 'No exist Id' }));

        } else {

            const result = adminModel.deleteOneUser(idUser);
            res.status(200).json(result);

        }
    }
}


export default {
    getAllUsers,
    deleteOneUserById

}