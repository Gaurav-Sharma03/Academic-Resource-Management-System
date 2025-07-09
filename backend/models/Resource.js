// backend/models/Resource.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true
  },
  department: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['notes', 'papers', 'syllabus'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resource', resourceSchema);
