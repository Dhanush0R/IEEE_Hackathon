import express from 'express';
import {getAssets, getAssetById, addAsset, updateAsset, delAsset} from '../controller/asset.controller.js';

const router = express.Router();

router.get('/', getAssets);
router.get('/:assetId', getAssetById);
router.post('/', addAsset)
router.delete('/:assetId', delAsset);
router.patch('/:assetId', updateAsset);

export default router;