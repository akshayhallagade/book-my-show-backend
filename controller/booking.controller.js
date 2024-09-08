const bookingModel = require("../model/bookings.model");

const getAllBookings = async (req, res) => {
  try {
    const { showId, seats, amount, successfully_booked } = req.body;
    const newBooking = await bookingModel.create({
      userId: req.userId,
      showId,
      seats,
      amount,
    });
    return res.json({ message: "Show added successfully", newBooking });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = { getAllBookings };
