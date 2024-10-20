const mongoose = require("mongoose")

const dbConnect = () => {
  try {
    mongoose.connect("mongodb+srv://anissbellil13:toNS9INDk3j0BPJm@cluster0.groyl.mongodb.net/movies")
    console.log("connected to database")
  } catch (error) {
    console.log("error connecting to database")
  }
}

module.exports = dbConnect