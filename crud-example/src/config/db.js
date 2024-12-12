const mongoose = require('mongoose');

const connectDB = () => {
  try {
    mongoose
      .connect("mongodb+srv://admin:bRS4X0wfmxgXm7Gt@backenddb.vc1wt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Connection failed!");
      });
  } catch (error) {
    console.log({ message: error.message });
  }
}

module.exports = connectDB;