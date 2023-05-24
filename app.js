require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, console.log(`app listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
