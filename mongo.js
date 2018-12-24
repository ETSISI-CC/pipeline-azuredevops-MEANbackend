const mongoose = require('mongoose');
const env = require('./env');

const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${
   env.databaseName
}?ssl=true`;



function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(
    mongoUri, {
      useNewUrlParser: true
    }
  );
}

module.exports = {
  connect,
  mongoose
};
