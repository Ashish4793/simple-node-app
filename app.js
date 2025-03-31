const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    console.log(`Hello, Server! Current server time is: ${currentTime}`);
    res.send(`Hello, World! Current server time is: ${currentTime}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
