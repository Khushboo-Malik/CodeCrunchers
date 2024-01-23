const mongoose=require("mongoose");

const { Subtopic, Topic, Stage, Field } = require('../models/courseModel.js');
const {Test,Question,Answer } = require('../models/testModel.js');

async function createTest(req, res) {
    try {
        const body = req.body;
        const stage_name = req.params.stage_name;

        if (!stage_name) {
            console.log("stage_name not provided")
            return res.status(400).json("Internal server error");
        }

        const { questions, answers } = body;

        if (!questions || !answers) {
            return res.status(400).json("Missing required input");
        }

        if (questions.length !== answers.length) {
            return res.status(400).json("Number of questions and answers should be the same");
        }

        if (!(questions.length === 15) || !(answers.length === 15)) {
            return res.status(400).json("Test can only be made of 15 marks");
        }
        const questionModels = questions.map(questionText => new Question({ Questions: questionText }));

        const answerModels = answers.map(answerText => new Answer({ Answers: answerText }));

        const test = new Test({
            stage_name: stage_name,
            questions: questionModels,
            answer: answerModels,
        });

        await test.save();

        res.status(201).json({ message: "Test created successfully", test: test });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
};



module.exports={createTest};
//test create API-post
//SHOW test questions API-get
//input answers api-post

