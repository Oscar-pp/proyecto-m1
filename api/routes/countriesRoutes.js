import Router from "express";

import countriesController from '../controller/countriesController.js';

const router = Router();

router.route('/')
            .get(countriesController.countriesList);



export default router;