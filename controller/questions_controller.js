const Question = require('../models/question');
const Option = require('../models/option')

module.exports.createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json({
            question:question,
            message: "Question is Created Succesfully"
        });
    } catch (error) {
        console.log("error in creating question", error);
        return res.status(500).send("Internal server error in creating question")
    }
};

module.exports.addOptions = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        const newOption = {
            id: question.options.length + 1,
            question: req.params.id,
            text: req.body.text,
            votes: 0,
        };
        const option = await Option.create(newOption);

        option.link_to_vote = `http://localhost:4000/api/v1/options/${option._id}/addVote`;
        await option.save();

        question.options.push(option);
        await question.save();
        res.json({
                option,
                message:"Option is added successfully"
            });
    } catch (error) {
        console.log("error in creating options",error);
        return res.status(500).json("Internal erro while creating options")
    }
}

module.exports.deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id).populate('options', 'votes');

        if (!question) {
            return res.status(500).json({
                message: "Question not found!"
            });
        }
        const optionsWithVotes = question.options.some(option => option.votes > 0);

        if (optionsWithVotes) {
            return res.status(400).json({
                message: "Question cannot be deleted, its options have votes!"
            });
        }
        await Option.deleteMany({ question: id });
        await Question.findByIdAndDelete(id);
        res.json({
            message: "Question as been deleted successfully"
        });
    } catch (error) {
        console.log("error in deleting question", error);
        return res.status(500).json("Internal error while deleting question");
    }
}

module.exports.viewQuestion = async(req,res)=>{
    try {
        const {id} = req.params;
        const question = await Question.findById(id).populate('options', '-__v');
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json({
            question:question,
            message:"question as been displayed successfully"
        });
    } catch (error) {
        console.log("error in viewing question",error);
        return res.status(500).json("Internal error while viewing question")
    }
}