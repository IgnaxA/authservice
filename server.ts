const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT, (err: Error) => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});