const { Router } = require("express");
var router = Router();
const addressRouter = require("./address");
const userRouter = require("./user");
const accountRouter = require("./account");

router.use("/address", addressRouter);
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
