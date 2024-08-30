const { Router } = require("express");
const controller = require("../controller/theater.controller");

const router = Router();

router.get("/", controller.getAllTheater);
router.post("/", controller.addTheater);
router.put("/:id", controller.updateTheater);
router.delete("/:id", controller.deleteTheater);

module.exports = router;
