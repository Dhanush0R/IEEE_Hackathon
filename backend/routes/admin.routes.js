import express from 'express';
import { authAdmin,regAdmin,logoutAdmin} from '../controller/admin.controller.js';

const router = express.Router();

router.post('/auth', authAdmin);
router.post('/', regAdmin);
router.post('/logout', logoutAdmin);


export default router;