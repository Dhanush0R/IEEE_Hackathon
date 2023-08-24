import express from 'express';
import {getAssets} from '../controller/asset.controller.js';

const router = express.Router();

router.get('/', getAssets);


export default router;