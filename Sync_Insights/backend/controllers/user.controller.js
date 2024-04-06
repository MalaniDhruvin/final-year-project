const User = require("../models/user.model.js");
const ApiResponse  = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");

exports.userLogin = asyncHandler(async(req, res) => {
    // try {
        const { email, password } = req.body;
        const isUser = await User.findOne({email
            // $and: [{
            //         email: email,
            //     },
            //     {
            //         password: password,
            //     },
            // ],
        });
        if (!isUser){
            throw new ApiError(404, "User does not exist")
        }

        const isPasswordCorrect = isUser.isPasswordCorrect(password)
        if (!isPasswordCorrect){
            throw new ApiError(404, "Invalid Password")
        }

        return res.status(200).json(
            new ApiResponse(200, isUser, "Success")
        )
        // if (isUser) {
        //     // return res.status(200).json({
        //     //     status: "Success",
        //     //     message: "You are successfully login..!",
        //     //     userData: isUser,
        //     // });
            // return res.status(200).json(
            //     new ApiResponse(200, isUser, "Success")
            // )
        // } else {
        //     throw new ApiError(404, "Invalid username OR password")
        // }
    // } catch (error) {
    //     return res.status(500).json({
    //         status: "Error",
    //         message: error.message,
    //     })
    // }
})