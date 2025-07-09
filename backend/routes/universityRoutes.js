const express = require('express');
const router = express.Router();
const University = require('../models/University');

// ✅ GET all universities
router.get('/', async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    console.error('❌ Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

// ✅ GET university by ID
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) return res.status(404).json({ error: 'University not found' });
    res.json(university);
  } catch (error) {
    console.error('❌ Error fetching university:', error);
    res.status(500).json({ error: 'Failed to fetch university' });
  }
});

// ✅ POST: Add a new university with departments & courses
router.post('/', async (req, res) => {
  try {
    const {
      name,
      shortName,
      description,
      location,
      website,
      logo,
      departments
    } = req.body;

    const newUniversity = new University({
      name,
      shortName,
      description,
      location,
      website,
      logo,
      departments
    });

    const saved = await newUniversity.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Error adding university:', error);
    res.status(500).json({ error: 'Failed to add university' });
  }
});

// ✅ PUT: Update university info
router.put('/:id', async (req, res) => {
  try {
    const updated = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'University not found' });
    res.json(updated);
  } catch (error) {
    console.error('❌ Error updating university:', error);
    res.status(500).json({ error: 'Failed to update university' });
  }
});

// ✅ DELETE: Remove university
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await University.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'University not found' });
    res.json({ message: 'University deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting university:', error);
    res.status(500).json({ error: 'Failed to delete university' });
  }
});

// ✅ PATCH: Add a department to a university
router.patch('/:id/add-department', async (req, res) => {
  const { department } = req.body;
  try {
    const university = await University.findById(req.params.id);
    if (!university) return res.status(404).json({ error: 'University not found' });

    university.departments.push(department);
    await university.save();

    res.status(200).json({ message: '✅ Department added successfully', university });
  } catch (error) {
    console.error('❌ Error adding department:', error);
    res.status(500).json({ error: 'Failed to add department' });
  }
});

// ✅ PATCH: Add a course to a specific department
router.patch('/:id/add-course', async (req, res) => {
  const { departmentName, course } = req.body;
  try {
    const university = await University.findById(req.params.id);
    if (!university) return res.status(404).json({ error: 'University not found' });

    const dept = university.departments.find(d => d.name === departmentName);
    if (!dept) return res.status(404).json({ error: 'Department not found' });

    dept.courses.push(course);
    await university.save();

    res.status(200).json({ message: '✅ Course added successfully', university });
  } catch (error) {
    console.error('❌ Error adding course:', error);
    res.status(500).json({ error: 'Failed to add course' });
  }
});

module.exports = router;
