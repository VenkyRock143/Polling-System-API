const Question = require('../model/question');
const Option = require('../model/option');

// Increment the count of votes
module.exports.addVote = async (req, res) => {
    try {
        const optionId = req.params.id;

        await Option.findByIdAndUpdate(optionId, { $inc: { votes: 1 } });

        return res.status(200).json({
            message: "Voted Successfully!!"
        });
    } catch (err) {
        console.error('Error In Adding Vote', err);
        return res.status(500).json({
            message: "Internal Server Error In Adding Vote!"
        });
    }
};

// Delete an option
module.exports.deleteOption = async (req, res) => {
    try {
        const { id } = req.params;
        const option = await Option.findById(id);

        if (!option) {
            return res.status(404).json({
                message: "Option not found!"
            });
        }

        if (option.votes > 0) {
            return res.status(400).json({
                message: "Option cannot be deleted, count of votes > 0!"
            });
        }

        await Question.findByIdAndUpdate(option.question, { $pull: { options: id } });
        await Option.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Option Deleted Successfully!!"
        });
    } catch (err) {
        console.error('Error in deleting Option', err);
        return res.status(500).json({
            message: "Internal Server Error in deleting Option!"
        });
    }
};
