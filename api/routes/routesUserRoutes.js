import Router from 'express';
import routesUserController from '../controller/routesUserController.js';
import authHandler from '../middleware/authHandler.js';

const router = Router();

router.route('/getRoutesUser')
    .get(authHandler.authUser, routesUserController.getAllRoutesUser)
router.route('/postRoutesUser')
    .post(routesUserController.postRouteUser)
router.route('/deleteRoutesUser')
    .delete(authHandler.authUser, routesUserController.deleteAllRouteUser)


export default router;