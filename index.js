const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const adminRouter = require("./routers/adminRouter");
const publicRouter = require("./routers/publicRouter");
const app = express();

// DB connection
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => err && console.log(err)
);

// Middlewares
app.use(express.json());

// Routers
app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
