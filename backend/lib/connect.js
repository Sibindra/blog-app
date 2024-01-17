const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB Connection Error: ", error));
};

module.exports = connect;
