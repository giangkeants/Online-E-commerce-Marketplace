require('dotenv').config()
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
}

module.exports = { connect };