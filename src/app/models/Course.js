const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        slug: String,
        videoId: String,
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Course', Course);
