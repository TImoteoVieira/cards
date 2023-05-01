const express = require('express')
const UserController = require("../controller/user");
const route = express();

const userController = new UserController();

route.post("/", userController.add);

module.exports = route;