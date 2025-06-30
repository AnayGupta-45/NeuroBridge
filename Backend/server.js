require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

require('./config/passport');

const app = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const dashboardRoutes = require('./routes/dashboard');
app.use('/api', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('NeuroBridge API is Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
