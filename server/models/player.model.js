const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        // required: [true, "Title is required"],
        minlength: [ 2, "Name must be at least 2 characters" ]
    },
    position: { 
        type: String,
    },
    game1: {
        type: String,
        default: "Undecided",
    },
    game2: {
        type: String,
        default: "Undecided",
    },
    game3: {
        type: String,
        default: "Undecided",
    }
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);
