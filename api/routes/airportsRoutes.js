import Router from "express";

import airportsController from '../controller/airportsController.js';

const router = Router();

router.route('/')
            .get(airportsController.airportsList);







export default router;
