require("dotenv").config();

//Import
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");
const movieRoutes = require("./routes/movie.route");
const theaterRoutes = require("./routes/theater.route");
const showsRoutes = require("./routes/shows.route");
const bookingRoutes = require("./routes/bookings.route");
const cors = require("cors");
const { AuthenticationMiddleware } = require("./middleware/authentication");

//Variables
const app = express();
const PORT = process.env.PORT;

//DB connection
mongoose.connect(process.env.MongoDB_URI).then(() => {
  console.log("Database connected Successfully.");
});

//Middlewares
app.use(express.json());
app.use(AuthenticationMiddleware());
app.use(cors());

//Routes
// app.use("/");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/theater", theaterRoutes);
app.use("/api/v1/shows", showsRoutes);
app.use("/api/v1/bookings", bookingRoutes);

app.listen(8000, () => {
  console.log("App Connected to the port : ", PORT);
});
