import Router from "express";
import routesController from '../controller/routesController.js';

const router = Router();

router.route('/')
            .get(routesController.routesList)

export default router;