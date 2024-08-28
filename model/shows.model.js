const { Schema, model } = require("mongoose");

const showsSchema = new Schema(
  {
    moviesId: {
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
    seats: {
      type: [Number],
      required: true,
      validate: {
        validator: function (v) {
          return v.every((seat) => seat > 0 && seat <= 100);
        },
        message: "seat must from 1 to 100",
      },
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const showsModel = new model("shows", showsSchema);

module.exports = showsModel;
