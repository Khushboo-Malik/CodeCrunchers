const express = require("express");
const router = express.Router();

const addStages= require("../controllers/courseController.js").addStages;
const addContent=require("../controllers/courseController.js").addContent;
const getStages=require("../controllers/courseController.js").getStages;
const addCourseName=require("../controllers/courseController.js").addCourseName;
const addAllStages=require("../controllers/courseController.js").addAllStages;



router.post("/addStages/:field",addStages);
router.post("/addContent",addContent);
router.get("/showStages/:field",getStages);
router.post("/addCourseName/:field",addCourseName);
router.post("/addAllStages/:stagename",addAllStages);


module.exports=router;