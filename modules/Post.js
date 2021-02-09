const mogoose = require("mongoose");

const PostSchema = mogoose.Schema({

    title:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }

   

});

module.exports = mogoose.model('Posts', PostSchema);