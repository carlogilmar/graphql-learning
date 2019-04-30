const express = require('express'); // Require express module
const PORT = 3500; // Server port
const app = express(); // Create an express application
app.use('/graphql', (req, res)=> { // Add a route handler
    res.send("Welcome to Our Authors App");
});
app.listen(PORT, ()=> {
    console.log("Server Running on Port:", PORT);
});

