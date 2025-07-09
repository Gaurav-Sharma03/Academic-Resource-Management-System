const express = require('express');
const router = express.Router();

const University = require('../models/University');
const Resource = require('../models/Resource');

router.get('/', async (req, res) => {
  try {
    // Count total universities
    const totalUniversities = await University.countDocuments();

    // Count total courses across all departments in all universities
    const universities = await University.find();
    let totalCourses = 0;

    universities.forEach(univ => {
      univ.departments.forEach(dept => {
        totalCourses += dept.courses.length;
      });
    });

    // Count total resources
    const notesCount = await Resource.countDocuments({ type: 'notes' });
    const papersCount = await Resource.countDocuments({ type: 'papers' });
    const syllabusCount = await Resource.countDocuments({ type: 'syllabus' });

    res.json({
      totalUniversities,
      totalCourses,
      notesCount,
      papersCount,
      syllabusCount
    });
  } catch (err) {
    console.error('❌ Error fetching stats:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
