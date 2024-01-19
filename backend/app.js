require("dotenv").config();
const PORT = process.env.PORT || 8000;

const express = require("express");
const app = express();

// middlewares
app.use(express.json());
const checkAuth = require("./middewares/auth");
app.use(checkAuth);

// cors
const cors = require("cors");

const corsOptions = {
  origin: process.env.ADMIN_URL,
  credentials: true,
};

app.use(cors(corsOptions));

// views
const path = require("path");
app.set("views", path.resolve("./views"));
app.set("view engine", "ejs");

// DB
const connect = require("./lib/connect");
connect();

// test api
app.get("/", (req, res) => {
  try {
    res.send("Response OK!");
  } catch (err) {
    console.log(err);
  }
});

// blog api
const blogRouter = require("./routes/blog");
app.use("/api/blog", blogRouter);

app.listen(PORT, () => console.log("Server: ", PORT));
