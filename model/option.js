const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    text:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
    },
    link_to_vote:{
        type:String
    }
},
    {
        timestamps:true
    }

);

const Options = mongoose.model('Options',optionsSchema);

module.exports = Options;