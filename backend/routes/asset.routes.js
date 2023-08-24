import express from 'express';
import {getAssets, getAssetById, addAsset, delAsset} from '../controller/asset.controller.js';

const router = express.Router();

router.get('/', getAssets);
router.get('/:assetId', getAssetById);
router.post('/', addAsset)
router.delete('/:assetId', delAsset);

export default router;