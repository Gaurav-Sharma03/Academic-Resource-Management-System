const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },                // Full name
  shortName: { type: String },                           // SPU, IITM, etc.
  description: { type: String },                         // Optional intro
  location: { type: String },                            // City or region
  website: { type: String },                             // Official site
  logo: { type: String },                                // Logo image URL or path

  departments: [{                                        // Academic structure
    name: { type: String, required: true },              // e.g., Computer Science
    courses: [{                                          // Courses under department
      name: { type: String, required: true },            // e.g., B.Tech CSE
      level: { type: String, enum: ['UG', 'PG', 'PhD'] },// UG/PG/PhD
      duration: { type: String },                        // e.g., 4 Years
      semesters: { type: Number }                        // e.g., 8
    }]
  }],

  // This is optional but useful for organizing uploads & views
  academicResources: {
    notesCount: { type: Number, default: 0 },
    papersCount: { type: Number, default: 0 },
    syllabusCount: { type: Number, default: 0 }
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('University', universitySchema);
