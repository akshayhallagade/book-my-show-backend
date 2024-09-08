const { Router } = require("express");
const { getAllBookings } = require("../controller/booking.controller");

const router = Router();

router.get("/");
router.get("/");
router.post("/", getAllBookings);
router.put("/:id");
router.delete("/:id");

module.exports = router;
