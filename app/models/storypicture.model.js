const mongoose = require('mongoose');

const StoriesSchema = mongoose.Schema({
    title: String,
    otherTitle: String,
    key: String,
    author: String,
    status: String,
    content: String,
    category: Array,
    views: Intl,
    episodes: Array,
    dateupdate: String,
    img: String,
    episodesUpdate: String
}, {
    timestamps: true
});

module.exports = mongoose.model('stories', StoriesSchema);