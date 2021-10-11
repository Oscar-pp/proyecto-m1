import routesUserModel from '../model/routesUserModel.js';
import bcrypt from 'bcrypt';
import HttpError from "http-errors";
import authHandler from '../middleware/authHandler.js';




const getAllRoutesUser = (req, res, next) => {

    try {












    } catch (error) {
        next(error);
    }
}

const pushRouteUser = (req, res, next) => {

    try {












    } catch (error) {
        next(error);
    }
}

const deleteAllRouteUser = (req, res, next) => {

    try {












    } catch (error) {
        next(error);
    }
}

export default {

    getAllRoutesUser,
    pushRouteUser,
    deleteAllRouteUser
}