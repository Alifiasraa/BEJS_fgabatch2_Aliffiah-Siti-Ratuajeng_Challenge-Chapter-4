const { Router } = require("express");
var router = Router();
const addressRouter = require("./address");
const userRouter = require("./user");
const accountRouter = require("./account");
const transactionRouter = require("./transaction");

router.use("/address", addressRouter);
router.use("/user", userRouter);
router.use("/account", accountRouter);
router.use("/transaction", transactionRouter);

module.exports = router;
