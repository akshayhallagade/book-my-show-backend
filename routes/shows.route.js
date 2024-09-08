const { Router } = require("express");
const {
  getAllShows,
  getAllShowsByMovieId,
  addShow,
  deleteShow,
  getSingleShow,
} = require("../controller/shows.controller");

const router = Router();

router.get("/", getAllShows);
router.get("/:id", getAllShowsByMovieId);
router.get("/schedule/:showid", getSingleShow);
router.post("/", addShow);
router.put("/:id");
router.delete("/:id", deleteShow);

module.exports = router;
