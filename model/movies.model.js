const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    length: {
      type: String,
    },
    release_date: {
      type: Date,
      required: true,
    },
    dimension_type: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

moviesSchema.index(
  { title: 1, genre: 1, length: 1, release_date: 1 },
  { unique: true }
);

const moviesModel = new model("movies", moviesSchema);

module.exports = moviesModel;
