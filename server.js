const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// don't need since we're not serving up any html??
// app.use(express.static("public"));

// relative path?
app.use(require('./routes'));

// tell Mongoose which db to connect to || if MONGODB_URI exists (heroku)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// use this to log mongo queries being executed.
mongoose.set("debug", true);
app.listen(PORT, () => console.log(`🌈 Connected on localhost:${PORT}`));
