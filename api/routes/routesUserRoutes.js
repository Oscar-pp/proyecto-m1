import Router from 'express';
import routesUserController from '../controller/routesUserController.js';
import authHandler from '../middleware/authHandler.js';

const router = Router();

router.route('/')
    .get(authHandler.authUser,routesUserController.getAllRoutesUser)
    .post(routesUserController.postRouteUser)
    .delete(authHandler.authUser,routesUserController.deleteAllRouteUser)


export default router;