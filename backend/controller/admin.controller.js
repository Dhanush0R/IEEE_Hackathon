import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
// @desc Auth Admin/Set Token
// route POST /api/admin/auth
// @access Public
const authAdmin = async (req, res) => {
    const {email, password} = req.body;
    const admin = await Admin.findOne({email: email});
    if(admin && (await admin.matchPassword(password))){
        const token = jwt.sign({adminID: admin._id, name: admin.name, email: admin.email}, process.env.JWT_SECRET)
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email
        })
    }
    else{
        res.status(401).json({message: "Invalid login details"});
        //throw new Error("Invalid login credentials");
    }
};

// @desc Add Admin
// route POST /api/admin
// @access Public
const regAdmin = async (req, res) => {
    const {name, email, password} = req.body;
    const adminExists = await Admin.findOne({email: email});
    if(adminExists){
        res.status(400);
        throw new Error(`${email} already registred as an admin`);
    }
    const admin = await Admin.create({
        name,
        email,
        password
    })
    if(admin){
        const token = jwt.sign({adminID: admin._id, name: admin.name, email: admin.email}, process.env.JWT_SECRET)
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email
        })
    }
    else{
        res.status(400);
        throw new Error('Error in creating admin');
    }
};


const logoutAdmin = async (req, res) => {};

// @desc Logout user
// route POST /api/users/logout
// @access Public
// const logoutUser = asyncHandler(async (req, res) => {
//     //destroy the cookie
//     destroyToken(res);
    
//     res.status(200).json({message: "User Logged out successfully"});
// });

export {authAdmin, regAdmin, logoutAdmin};

