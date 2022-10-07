const mongoose = require('mongoose');
const {Schema} = mongoose;

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
    email: {
        type: String,
        required: true
      },
    moodRating: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;