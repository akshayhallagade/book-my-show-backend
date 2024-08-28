const { Router } = require("express");
const controller = require("../controller/user.controller");

const router = Router();

router.post("/signup", controller.handleSignUp);
router.post("/signin", controller.handleSignIn);
router.get("/profile");

module.exports = router;
