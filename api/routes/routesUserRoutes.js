import Router from 'express';
import routesUserController from '../controller/routesUserController.js';

const router = Router();

router.route('/')
    .get(routesUserController.getAllRoutesUser)
    .post(routesUserController.putRouteUser)
    .delete(routesUserController.deleteAllRouteUser)


export default router;