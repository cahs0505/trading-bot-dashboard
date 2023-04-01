const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/config');

let server;
console.log(config.mongoose.url)
mongoose.connect(config.mongoose.url).then(() => {
 
  server = app.listen(config.port, "0.0.0.0" , () => {
    console.log(`Listening to port ${config.port}`)
  });
});