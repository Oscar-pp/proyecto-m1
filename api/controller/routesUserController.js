import RoutesUser from '../model/routesUserModel.js';
import HttpError from "http-errors";

const getAllRoutesUser = (req, res, next) => {

    try {

        const datas = req.body;

        const listDatas = RoutesUser.listAllRoutesUser(datas.userId);
        res.status(200).json(listDatas);

    } catch (error) {
        next(error);
    }
}
 
const postRouteUser = (req, res, next) => {
    // origen, destino, airline
    try {

        const selectRoute = req.body;

        const putDatas = RoutesUser.postDatasRoute(selectRoute);
        res.status(200).json(putDatas);

    } catch (error) {
        next(error);
    }
}

const deleteAllRouteUser = (req, res, next) => {

    try {

        const datas = req.body;

        const listDatas = RoutesUser.deleteAllRoutesUser(datas.idUser);
        res.status(200).json(listDatas);


    } catch (error) {
        next(error);
    }
}

export default {

    getAllRoutesUser,
    postRouteUser,
    deleteAllRouteUser
}