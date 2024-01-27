const express = require("express");
const router = express.Router();

const addNewFields= require("../controllers/courseController.js").addNewFields;
const showAllFields = require("../controllers/courseController.js").showAllFields;

router.post("/addNewField",addNewFields);
router.get("/showAllFields",showAllFields);



module.exports=router;
