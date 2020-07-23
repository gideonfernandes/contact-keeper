const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Add Cors
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (request, response) => response.json({
  message: 'Welcome to Contact Keeper API!'
}));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
