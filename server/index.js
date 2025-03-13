require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send('DocEase server is running')
})

app.listen(port, () => {
    console.log(`DocEase server is running on PORT ${port}`)
})