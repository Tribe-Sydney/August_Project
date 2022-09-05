// packages required
const express = require("express");
const userRoutes = require("./routes/user-routes");

const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `http://localhost:4000${req.url} not found`,
  });
});

module.exports = app;
