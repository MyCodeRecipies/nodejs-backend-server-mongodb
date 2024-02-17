const UserModel = require('../model/UserModel');

const register = async (req, res) => {
    //    res.send('Heloo');
    try {
        const user_mobile = req.body.mobile;

        const user = new UserModel({
            mobile: user_mobile,
            dateCreate: Date().toString()
        });

        const checkUser = await UserModel.findOne({ "mobile": user_mobile });
        if (!checkUser) {
            const userData = await user.save();
            if (userData) {
                res.status(200).send({ success: true, msg: 'User Added Successfully', data: userData });
            } else {
                res.status(200).send({ success: false, msg: 'User Addition Failed', data: userData });
            }
        } else {
            res.status(200).send({ success: false, msg: 'User Already Added' });
        }


    }
    catch (error) {
        res.status(400).send({ success: false, msg: 'Something went Wrong' });
    }
}

const login = async (req, res) => {
    //    res.send('Heloo');
    try {
        const user_mobile = req.body.mobile;

        const checkUser = await UserModel.findOne({ "mobile": user_mobile });
        if (checkUser) {
            res.status(200).send({ success: true, msg: 'User Logged in Successfully' });
        } else {
            res.status(200).send({ success: false, msg: 'Invalid User' });
        }


    }
    catch (error) {
        res.status(400).send({ success: false, msg: 'Something went Wrong' });
    }
}

module.exports = {
    register,
    login
}