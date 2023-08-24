import Asset from '../models/asset.model.js';

// @desc Get Assets
// route GET /api/assets
// @access Public
const getAssets = async (req, res) => {
    const queries = req.query.query;
    const state = req.query.state;
    const district = req.query.district;
    console.log(district);
    const taluk = req.query.taluk;
    console.log(queries);
    try {
        const queryArray = queries && queries.split(',').map(query => query.trim());
    
        const assets = await Asset.find({
          $or: [
            { name: { $in: queryArray, $regex: '.*', $options: 'i' } },
            {
            $and: [
                { district: {  $regex: district, $options: 'i' } },
                { taluk: {  $regex: taluk,$options: 'i' } },
                { state: {  $regex: state, $options: 'i' } }
            ],
            }
          ]
        });
    
        res.status(200).json(assets);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching assets.' });
      }
};


// @desc Get Asset by ID
// route GET /api/assets/:assetId
// @access Public
const getAssetById = async (req, res) => {
    const assetId = req.params.assetId;
    try {
    
        const asset = await Asset.findById(assetId);
    
        res.status(200).json(asset);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching assets.' });
      }
};

// @desc Add an Asset
// route POST /api/assets
// @access Admin
const addAsset = async (req, res) => {
    const newAsset = new Asset({
        type: req.body.type,
        name: req.body.name,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        size: req.body.size,
        yearOfConstruction: req.body.yearOfConstruction,
        capacity: req.body.capacity,
        rooms: req.body.rooms,
        labs: req.body.labs,
        maintananceRequired: req.body.maintananceRequired,
        presentUse: req.body.presentUse,
        actionHistory: [],
        state: req.body.state,
        district: req.body.district,
        taluk: req.body.taluk
    })
    newAsset.save()
    .then(() => {return res.json("New asset added!")})
    .catch((err) => {return res.status(400).json('Error: '+ err)})
};

// @desc Update an Asset
// route PATCH /api/assets/:assetId
// @access Admin
const updateAsset = async (req, res) => {
    const assetId = req.params.assetId;
    const action = {actionType: 'updated xyz', details: 'abcd', updatedBy: 'user'};
    const {type,name,location,latitude,longitude,size,yearOfConstruction,capacity,rooms,labs,maintananceRequired,presentUse,state,district,taluk} = req.body;
    try{
        //const asset = await Asset.findById(assetId);
        const updatedAsset = await Asset.findByIdAndUpdate(assetId,
            {
            $set: {
                 type,
                 name,
                 location,
                 latitude,
                 longitude,
                 size,
                 yearOfConstruction,
                 capacity,
                 rooms,
                 labs,
                 maintananceRequired,
                 presentUse,
                state,
                 district,
                 taluk
            },
            $push: { actionHistory: action },
        },
        {new: true})
        if (!updatedAsset) {
            return res.status(404).json({ message: 'Asset not found' });
          }
      
          res.status(200).json(updatedAsset);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error fetching assets.' });
    }
    
    
};

// @desc Delete Asset by ID
// route DELETE /api/assets/:assetId
// @access Public
const delAsset = async (req, res) => {
    const assetId = req.params.assetId;
    try {
    
        const asset = await Asset.findByIdAndDelete(assetId);
    
        res.status(200).json({message: 'Asset deleted successfully'});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching assets.' });
      }
};

export {getAssets, getAssetById, addAsset, updateAsset, delAsset}