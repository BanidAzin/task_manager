const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 5000;

app.listen(port, console.log(`app listening on port ${port}`));
