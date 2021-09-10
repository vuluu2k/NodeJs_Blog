const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongoose_delete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        slug: { type: String, slug: 'name', unique: true },
        videoId: String,
    },
    {
        timestamps: true,
    },
);
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true });
module.exports = mongoose.model('Course', Course);
