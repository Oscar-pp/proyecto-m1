import Router from "express";

import routesController from '../controller/routesController.js';

const router = Router();

router.route('/:origen')
            .get(routesController.routesList);



export default router;