const { Schema, model } = require("mongoose");
const { boolean } = require("zod");

const theaterSchema = new Schema(
  {
    theaterName: {
      type: String,
      required: true,
    },
    location: {
      lat: {
        type: String,
        required: true,
      },
      long: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

theaterSchema.index({ lat: 1, long: 1, isActive: 1 }, { unique: true });

const theaterModel = new model("theaters", theaterSchema);

module.exports = theaterModel;
