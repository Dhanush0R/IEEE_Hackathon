import Asset from '../models/asset.model.js';

// @desc Get Assets
// route GET /api/assets
// @access Public
const getAssets = async (req, res) => {
    const queries = req.query.query;
    console.log(queries);
    try {
        const queryArray = queries.split(',').map(query => query.trim());
    
        const assets = await Asset.find({
          $or: [
            { name: { $in: queryArray, $regex: '.*', $options: 'i' } },
            { district: { $in: queryArray, $regex: '.*', $options: 'i' } },
            { taluk: { $in: queryArray, $regex: '.*',$options: 'i' } },
            { state: { $in: queryArray, $regex: '.*', $options: 'i' } }
          ],
        });
    
        res.status(200).json(assets);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching assets.' });
      }
};

export {getAssets}