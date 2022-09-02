const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
        required: true,
        trim: true

    },
    commentBody: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;