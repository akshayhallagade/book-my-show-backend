const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Discription: {
      type: String,
    },
    length: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const moviesModel = new model("movies", moviesSchema);

module.exports = moviesModel;
