const express = require("express")
const app = express();
const path = require('path')
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, './about.html'));
});

app.get('/contact-me', function (req, res) {
    res.sendFile(path.join(__dirname, './contact-me.html'));
});

// Error handling for 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});