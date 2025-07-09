const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // ✅ Only declared once
const statsRoutes = require('./routes/statsRoutes');
const universityRoutes = require('./routes/universityRoutes');
const adminRoutes = require('./routes/adminRoutes');
const resourceRoutes = require('./routes/resources'); // ✅

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files (uploaded PDFs)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ API Routes
app.use('/api/universities', universityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/resources', resourceRoutes); // ✅
app.use('/api/stats', statsRoutes);
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
