const express = require('express');
const app = express();
const port = 8800;

app.use("/static", express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Serving files on ${port}`)
});