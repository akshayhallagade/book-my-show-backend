const multer = require("multer");
const { Router } = require("express");
const controller = require("../controller/movie.controller");

const upload = multer();

const router = Router();

router.get("/", controller.getAllMovies); //getAllMovies -> Allowed for all
router.get("/:id", controller.getMovieById); //getSpecificMovie --> Authentication req
router.post("/", upload.single("img"), controller.addMovie); //AddMovies --> Authentication req
router.put("/:id", upload.single("img"), controller.updateMovie); // Edit a movie --> Authentication req
router.delete("/:id", controller.deleteMovie); //Delete a movie -->Authentication req

module.exports = router;
