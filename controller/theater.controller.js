const theaterModel = require("../model/theater.model");

const getAllTheater = async (req, res) => {
  const theaterData = await theaterModel.find();
  return res.json({ message: "fetched all the theater", theaterData });
};
const addTheater = async (req, res) => {
  const {
    theaterName,
    location: { lat, long, address },
  } = req.body;

  const newTheater = await theaterModel.create({
    theaterName,
    location: { lat, long, address },
  });
  return res.json({ message: "theater created Successfully", newTheater });
};
const updateTheater = async (req, res) => {
  const theaterId = req.params.id;
  const {
    theaterName,
    location: { lat, long, address },
  } = req.body;

  const newTheater = await theaterModel.findByIdAndUpdate(theaterId, {
    theaterName,
    location: { lat, long, address },
  });

  return res.json({ message: "theater updated successfully " });
};
const deleteTheater = async (req, res) => {
  const theaterId = req.params.id;
  const deletedTheater = await theaterModel.findByIdAndDelete(theaterId);
  return res.json({ message: "theater deleted Successfull." });
};

module.exports = { getAllTheater, addTheater, updateTheater, deleteTheater };
