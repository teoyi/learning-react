import mongoose from 'mongoose';

// Schema creates uniformity to the data being received. Essentially a declaration of what should be included when doing form submissions
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    name: String,
    creator: String, 
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String], 
        default: []
    },
    comments: { 
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Creating a model to be exported and used in another file
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;