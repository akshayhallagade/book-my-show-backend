const moviesModel = require("../model/movies.model");

const getAllMovies = async (req, res) => {
  const movieData = await moviesModel.find();
  return res.json({ message: "Movie fetched successfully", movieData });
};
const getMovieById = async (req, res) => {
  const movieData = await moviesModel.findById(req.params.id);
  return res.json({ message: "Movie fetched successfully", movieData });
};

const addMovie = async (req, res) => {
  const { title, genre } = req.body;
  if (!req.file) res.json({ message: "Image upload failed !" });
  const img = req.file.buffer;
  const movieData = await moviesModel.create({
    title,
    genre,
    img,
  });
  return res.json({ message: "Movie Created Successfully", movieData });
};
const updateMovie = async (req, res) => {
  const { title, genre } = req.body;
  if (!req.file) res.json({ message: "Image upload failed !" });
  const img = req.file.buffer;
  const movieData = await moviesModel.findByIdAndUpdate(req.params.id, {
    title,
    genre,
    img,
  });
  return res.json({ message: "Movie Created Successfully", movieData });
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  const movieData = await moviesModel.findByIdAndDelete(movieId);
  return res.json({ message: "Movie Deleted Successfully", id: movieData._id });
};

module.exports = {
  addMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
};
