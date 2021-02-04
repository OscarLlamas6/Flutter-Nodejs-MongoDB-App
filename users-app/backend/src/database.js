const mongoose = require('mongoose');
const config = require("./config");

const MONGODB_URL = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

async function connect(){
  await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Database connected :D');
};

module.exports = { connect };