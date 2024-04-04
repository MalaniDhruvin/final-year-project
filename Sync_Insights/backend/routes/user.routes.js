const express = require("express");
const { userLogin } = require("../controllers/user.controller.js");
const { addUser } = require("../controllers/adduser.controller.js");
const router = express.Router();

router.post("/login", userLogin);
router.post("/adduser", addUser);

module.exports = router;