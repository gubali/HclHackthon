const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRoutes = require('./patient/routes/Patient');

const app = express();
const PORT = 8000;

const MONGODB_URI = 'mongodb://localhost:27017/users';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

app.use(express.json());

app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
