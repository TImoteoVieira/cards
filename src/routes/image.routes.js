const express = require('express')
const ImageController = require("../controller/image");
const route = express();

const imageController = new ImageController();

route.post("/", imageController.add);
route.get("/", imageController.list);

module.exports = route;