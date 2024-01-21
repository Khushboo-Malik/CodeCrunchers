const express = require("express");
const router = express.Router();

const addTest= require("../controllers/testController.js").createTest;


router.post("/createTest/:stage_name",addTest);


module.exports=router;