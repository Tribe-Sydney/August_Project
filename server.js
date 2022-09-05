const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./index");
const port = process.env.PORT;

// Connecting to the database
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch((err) => console.log(err));

// Running the server
app.listen(port, () => {
  console.log("Server is running fine");
});
