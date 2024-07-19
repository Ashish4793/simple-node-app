const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.send(`Hello, World! Current server time is: ${currentTime}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});