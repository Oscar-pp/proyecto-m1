import routesUserModel from '../model/routesUserModel.js';
import bcrypt from 'bcrypt';
import HttpError from "http-errors";
import authHandler from '../middleware/authHandler.js';




const getAllRoutesUser = (req, res, next) => {

    try {

        const datas = req.body;

        const listDatas = routesUserController.listAllRoutesUser(datas.idUser);
        res.status(200).json(listDatas);

    } catch (error) {
        next(error);
    }
}

const putRouteUser = (req, res, next) => {
    // origen, destino, airline
    try {

        const selectRoute = req.params;

        const putDatas = routesUserController.putDatasRoute(selectRoute);
        res.status(200).json(putDatas);

    } catch (error) {
        next(error);
    }
}

const deleteAllRouteUser = (req, res, next) => {

    try {

        const datas = req.body;

        const listDatas = routesUserController.deleteAllRoutesUser(datas.idUser);
        res.status(200).json(listDatas);


    } catch (error) {
        next(error);
    }
}

export default {

    getAllRoutesUser,
    putRouteUser,
    deleteAllRouteUser
}