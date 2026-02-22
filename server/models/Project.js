const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: {
        type: [String],
        required: true,
    },
    githubLink: {
        type: String,
    },
    liveLink: {
        type: String,
    },
    image: {
        type: String, // URL to image
        required: false
    },
    category: {
        type: String,
        enum: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI/ML'],
        default: 'Full Stack'
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
