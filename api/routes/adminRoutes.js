import Router from 'express';
import adminController from '../controller/adminController.js';

const router = Router();
 
router.route('/')
            .get(adminController.getAllUsers)
            .delete(adminController.deleteOneUserById);

export default router;