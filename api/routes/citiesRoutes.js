import Router from "express";

import citiesController from '../controller/citiesController.js';

const router = Router();

router.route('/')
            .get(citiesController.citiesList);



export default router;
