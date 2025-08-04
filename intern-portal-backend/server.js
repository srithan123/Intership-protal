// intern-portal-app/intern-portal-backend/server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy data for the dashboard
const dummyDashboardData = {
    userName: 'Intern Doe', // This can be overridden by frontend login name
    referralCode: 'INTERN2025DOE',
    totalDonations: 12500, // Just a number
};

// Dummy data for leaderboard (Bonus)
const dummyLeaderboardData = [
    { id: 1, name: 'Alice Smith', donations: 15000, position: 1 },
    { id: 2, name: 'Bob Johnson', donations: 13500, position: 2 },
    { id: 3, name: 'Charlie Brown', donations: 12500, position: 3 },
    { id: 4, name: 'Intern Doe', donations: 12500, position: 4 }, // Add our dummy intern here
    { id: 5, name: 'David Lee', donations: 11000, position: 5 },
];


// API Endpoint to return dummy dashboard data
app.get('/api/dashboard-data', (req, res) => {
    console.log('Fetching dashboard data...');
    res.json(dummyDashboardData);
});

// API Endpoint to return dummy leaderboard data (Bonus)
app.get('/api/leaderboard', (req, res) => {
    console.log('Fetching leaderboard data...');
    res.json(dummyLeaderboardData);
});

// Basic welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Intern Portal Backend API!');
});
// Start the server
app.listen(PORT, () => {
console.log(`Backend server running on port ${PORT}`);
});