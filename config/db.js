const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://silverak42:BJ1h4ZsWBqX4yD1x@havenight.teaww0z.mongodb.net/?retryWrites=true&w=majority&appName=Havenight",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
