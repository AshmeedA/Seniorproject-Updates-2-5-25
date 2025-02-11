require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());


const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Authentication API");
});

// Signup endpoint
app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [result] = await pool.execute(
            "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
            [username, email, hashedPassword]
        );
        res.status(201).json({ id: result.insertId, username, email });
    } catch (err) {
        res.status(500).json({ error: "User already exists or database error" });
    }
});

// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await pool.execute("SELECT * FROM users WHERE email = ?", [email]);
        if (users.length === 0) return res.status(400).json({ error: "User not found" });

        const validPassword = await bcrypt.compare(password, users[0].password_hash);
        if (!validPassword) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: users[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/test-db", async (req, res) => {
    try {
        const [result] = await pool.execute("SELECT 1 + 1 AS solution");
        res.json({ message: "Database connected!", result: result[0].solution });
    } catch (err) {
        res.status(500).json({ error: "Database connection failed", details: err.message });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const [posts] = await pool.execute("SELECT * FROM posts ORDER BY created_at DESC");
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});
