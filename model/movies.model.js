const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // description: {
    //   type: String,
    // },
    // length: {
    //   type: String,
    //   required: true,
    // },
    genre: {
      type: [String],
      required: true,
    },
    img: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

const moviesModel = new model("movies", moviesSchema);

module.exports = moviesModel;
