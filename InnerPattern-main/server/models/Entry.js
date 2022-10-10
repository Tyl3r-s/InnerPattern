const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entryText: {
        type: String,
        required: true,
        minlength: 10
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    moodRating: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;