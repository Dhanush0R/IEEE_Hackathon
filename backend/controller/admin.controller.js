import Admin from '../models/admin.model.js';

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
        res.status(401);
        throw new Error('Invalid Credentials entered');
    }
};

// @desc Add Admin
// route POST /api/admin
// @access Public
const regUser = async (req, res) => {
    const {name, email, password} = req.body;
    const adminExists = await Admin.findOne({email: email});
    if(adminExists){
        res.status(400);
        throw new Error(`${email} already registred as a user`);
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid username');
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

export {authAdmin, logoutAdmin};

