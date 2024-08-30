require("dotenv").config();

//Import
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
//Variables
const app = express();
const PORT = process.env.PORT;

//DB connection
mongoose.connect(process.env.MongoDB_URI).then(() => {
  console.log("Database connected Successfully.");
});

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
// app.use("/");
app.use("/api/v1/user", userRoutes);

app.listen(8000, () => {
  console.log("App Connected to the port : ", PORT);
});
