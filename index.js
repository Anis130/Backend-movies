const express = require('express')
const DbConnect = require('./Config/DbConnect')
const cors = require("cors")
const app = express()
const dotenv = require("dotenv");
const port = 3000
const bodyParser = require("body-parser")
const path = require('path');

dotenv.config();
app.use(cors({
  origin: 'https://movies1231.netlify.app', // Allow your frontend domain
  credentials: true // Allow credentials if needed
}))
app.use(bodyParser.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/Auth", require("./Routes/Auth.routes"))
app.use("/api/Movie", require("./Routes/Movie.routes"))

app.listen(port, () => {
  DbConnect()
  console.log(`server running port ${port}`)
})