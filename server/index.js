const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
require('dotenv').config();
//middleware
app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => {
  res.send(`Welcome to our application`);
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});