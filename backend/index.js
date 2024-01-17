require("dotenv").config();
const PORT = process.env.PORT || 8000;

const express = require("express");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors
const cors = require("cors");
app.use(cors());

// DB
const connect = require("./lib/connect");
connect();


// test api
app.get("/", (req, res) => {
  res.send("Hello");
});

// blog api
const blogRouter = require("./routes/blog");
app.use("/api/blog", blogRouter);

app.listen(PORT, () => console.log("Server: ", PORT));
