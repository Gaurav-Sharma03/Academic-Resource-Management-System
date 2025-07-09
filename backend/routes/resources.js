// backend/routes/resources.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Resource = require('../models/Resource');

// Ensure uploads/resources folder exists
const uploadDir = 'uploads/resources';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

/**
 * @route   POST /api/resources/upload
 * @desc    Upload academic resource (notes/papers/syllabus)
 */
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { university, department, course, semester, type, title } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const newResource = new Resource({
      university,
      department,
      course,
      semester: parseInt(semester),
      type,
      title,
      file: req.file.filename
    });

    await newResource.save();
    res.status(201).json({ message: '✅ File uploaded successfully', data: newResource });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

/**
 * @route   GET /api/resources/:university/:department/:course/:semester
 * @desc    Get all resources for a specific university/course/semester
 */
router.get('/:university/:department/:course/:semester', async (req, res) => {
  try {
    const { university, department, course, semester } = req.params;

    const resources = await Resource.find({
      university,
      department,
      course,
      semester: parseInt(semester)
    });

    res.json(resources);
  } catch (err) {
    console.error('❌ Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

/**
 * @route   GET /api/resources/notes
 * @desc    Get all notes
 */
router.get('/notes', async (req, res) => {
  try {
    const notes = await Resource.find({ type: 'notes' });
    res.json(notes);
  } catch (err) {
    console.error('❌ Failed to fetch notes:', err);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

/**
 * @route   GET /api/resources/papers
 * @desc    Get all question papers
 */
router.get('/papers', async (req, res) => {
  try {
    const papers = await Resource.find({ type: 'papers' });
    res.json(papers);
  } catch (err) {
    console.error('❌ Failed to fetch papers:', err);
    res.status(500).json({ error: 'Failed to fetch papers' });
  }
});

/**
 * @route   GET /api/resources/syllabus
 * @desc    Get all syllabus
 */
router.get('/syllabus', async (req, res) => {
  try {
    const syllabus = await Resource.find({ type: 'syllabus' });
    res.json(syllabus);
  } catch (err) {
    console.error('❌ Failed to fetch syllabus:', err);
    res.status(500).json({ error: 'Failed to fetch syllabus' });
  }
});

/**
 * @route   DELETE /api/resources/:id
 * @desc    Delete resource by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Resource deleted' });
  } catch (err) {
    console.error('❌ Failed to delete resource:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
});
router.get('/:university/:department/:course/:semester', async (req, res) => {
  try {
    const { university, department, course, semester } = req.params;

    const resources = await Resource.find({
      university,
      department,
      course,
      semester: parseInt(semester)
    });

    // Group by type
    const grouped = {
      notes: [],
      syllabus: [],
      papers: [],
    };

    resources.forEach(res => {
      if (res.type === 'notes') grouped.notes.push(res);
      else if (res.type === 'syllabus') grouped.syllabus.push(res);
      else if (res.type === 'papers') grouped.papers.push(res);
    });

    res.json(grouped);
  } catch (err) {
    console.error('❌ Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

module.exports = router;
