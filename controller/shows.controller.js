const Mongoose = require("mongoose");
const showsModel = require("../model/shows.model");

const getAllShows = async (req, res) => {
  try {
    const showsData = await showsModel.aggregate([
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      {
        $lookup: {
          from: "theaters",
          localField: "theaterId",
          foreignField: "_id",
          as: "theater",
        },
      },
      {
        $sort: { showTime: 1 },
      },
      {
        $unwind: {
          path: "$movie",
          includeArrayIndex: "string",
        },
      },
      {
        $unwind: {
          path: "$theater",
          includeArrayIndex: "string",
        },
      },
    ]);
    return res.json({ message: "Fetched Shows Data", showsData });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const getAllShowsByMovieId = async (req, res) => {
  try {
    const id = req.params.id;

    const showsData = await showsModel.aggregate([
      {
        $match: {
          movieId: new Mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      {
        $lookup: {
          from: "theaters",
          localField: "theaterId",
          foreignField: "_id",
          as: "theater",
        },
      },
      {
        $unwind: {
          path: "$movie",
          includeArrayIndex: "string",
        },
      },
      {
        $unwind: {
          path: "$theater",
          includeArrayIndex: "string",
        },
      },
      {
        $sort: { showTime: 1 },
      },
    ]);
    return res.json({ message: "Fetched Shows Data", showsData });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const getSingleShow = async (req, res) => {
  try {
    const showid = req.params.showid;
    const showsData = await showsModel.aggregate([
      {
        $match: {
          _id: new Mongoose.Types.ObjectId(showid),
        },
      },
      {
        $lookup: {
          from: "movies",
          localField: "movieId",
          foreignField: "_id",
          as: "movie",
        },
      },
      {
        $lookup: {
          from: "theaters",
          localField: "theaterId",
          foreignField: "_id",
          as: "theater",
        },
      },
      {
        $unwind: {
          path: "$movie",
          includeArrayIndex: "string",
        },
      },
      {
        $unwind: {
          path: "$theater",
          includeArrayIndex: "string",
        },
      },
    ]);

    return res.json({ message: "shows fetched successfully", showsData });
  } catch (error) {
    res.json({ message: "Internal Server error", error: error.message });
  }
};

const addShow = async (req, res) => {
  try {
    const data = req.body;
    const showsData = await showsModel.create(data);
    return res.json({ message: "Shows created Successfully.", showsData });
  } catch (error) {
    if (error.code === 11000)
      return res.json({ message: "Already present in the database." });
    return res.json({ error: error.message });
  }
};

const deleteShow = async (req, res) => {
  try {
    const id = req.params.id;
    const showsData = await showsModel.findByIdAndDelete(id);
    return res.json({ message: "Deleted Shows", id: showsData._id });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  getAllShows,
  getAllShowsByMovieId,
  getSingleShow,
  addShow,
  deleteShow,
};
