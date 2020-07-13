const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://" + process.env.MONGO_ATLAS_USER + ":"
  + process.env.MONGO_ATLAS_PW + "@cluster-quqeu.mongodb.net/" + process.env.MONGO_ATLAS_DB + "?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, // new method for mongo 5.0 or newer
    useUnifiedTopology: true
    // useMongoClient: true // old method
  }, (error) => {
    if (!error) {
      console.log("connected");
    } else {
      console.log("not Connected");
    }
  }
);

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

module.exports = mongoose;
