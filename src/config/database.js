// require('dotenv').config()
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://namworkmc:gosuandpeep12@eflyer-cluster.mp2iy.mongodb.net/elfyer_db?retryWrites=true&w=majority");

    console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
}

module.exports = { connect };