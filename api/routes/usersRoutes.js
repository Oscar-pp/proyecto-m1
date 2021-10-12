import Router from 'express';
import usersController from '../controller/usersController.js';
import authHandler from '../middleware/authHandler.js';


const router = Router();

router.use(authHandler.encryptPassword);

router.route('/register')
            .post(usersController.register);

router.route('/login')
            .post(usersController.login);

 
export default router;