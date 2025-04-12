// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database('./users.db', (err) => {
    
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database.');
});

// Create users table (for login/register)
const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    number TEXT NOT NULL,
    aadhaar TEXT NOT NULL,
    password TEXT NOT NULL
  )
`;
db.run(createUserTable);

// Create user_details table (for additional details from details.html)
const createDetailsTable = `
  CREATE TABLE IF NOT EXISTS user_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aadhaar TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender TEXT NOT NULL,
    guardian TEXT NOT NULL
  )
`;
db.run(createDetailsTable);

// ✅ Register Route
app.post('/register', (req, res) => {
  const { name, number, aadhaar, password } = req.body;
  console.log("Recived data;",req.data);
  if (!name || !number || !aadhaar || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const insertQuery = `INSERT INTO users (name, number, aadhaar, password) VALUES (?, ?, ?, ?)`;
  db.run(insertQuery, [name, number, aadhaar, password], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to register user' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// ✅ Login Route
app.post('/login', (req, res) => {
  const { aadhaar, password } = req.body;

  if (!aadhaar || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = `SELECT * FROM users WHERE aadhaar = ? AND password = ?`;
  db.get(query, [aadhaar, password], (err, row) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (row) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid Aadhaar or Password' });
    }
  });
});

// ✅ Save User Details Route
app.post('/details', (req, res) => {
  const { aadhaar, phone, email, address, age, gender, guardian } = req.body;

  if (!aadhaar || !phone || !address || !age || !gender || !guardian) {
    return res.status(400).json({ message: 'All required fields must be filled.' });
  }

  const insertQuery = `
    INSERT INTO user_details (aadhaar, phone, email, address, age, gender, guardian)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.run(insertQuery, [aadhaar, phone, email, address, age, gender, guardian], function (err) {
    if (err) {
      console.error("DB insert error:", err);
      return res.status(500).json({ message: 'Failed to save details' });
    }
    res.status(201).json({ message: 'Details saved successfully' });
  });
});

// ✅ Default route for browser GET requests
app.get('/', (req, res) => {
  res.send('🚀 Backend is running! Ready to accept requests.');
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});