const user = require("../models/user.model");

exports.userLogin = async(req, res) => {
    try {
        const { email, password } = req.body;
        const isUser = await user.findOne({
            $and: [{
                    email: email,
                },
                {
                    password: password,
                },
            ],
        });
        if (isUser) {
            return res.status(200).json({
                status: "Success",
                message: "You are successfully login..!",
                userData: isUser,
            });
        }
        return res.status(401).json({
            status: "Error",
            message: "Invalid email or password..!",
        })
    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: error.message,
        })
    }
};