const express = require("express");
const cors = require("cors");
// const errors = require("../middleware/erros");
// const token = require("../middleware/getToken"); 
const fileUpload = require('express-fileupload');
const UsersRoute = require("./user.routes");
const ImagesRoute = require("./image.routes");
var corsOptions = {
    origin: "*",
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/users", UsersRoute);
app.use("/api/images", ImagesRoute);

module.exports = app;
