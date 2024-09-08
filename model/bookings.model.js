const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    showId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "shows",
    },
    seats: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    successfully_booked: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: true }
);

bookingSchema.index({ userId: 1, showId: 1 }, { unique: true });

const bookingModel = new model("bookings", bookingSchema);
module.exports = bookingModel;
