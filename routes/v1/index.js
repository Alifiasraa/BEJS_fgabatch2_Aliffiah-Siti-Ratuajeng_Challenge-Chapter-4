const { Router } = require("express");
var router = Router();
const addressRouter = require("./address");
const userRouter = require("./user");

router.use("/address", addressRouter);
router.use("/user", userRouter);

module.exports = router;
