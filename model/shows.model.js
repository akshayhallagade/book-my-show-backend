const { Schema, model } = require("mongoose");

const showsSchema = new Schema(
  {
    movieId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    theaterId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    showTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

showsSchema.index({ theaterId: 1, showTime: 1 }, { unique: true });

const showsModel = new model("shows", showsSchema);

module.exports = showsModel;
