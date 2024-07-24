const { Router } = require("express");
var router = Router();
const addressRouter = require("./address");

router.use("/address", addressRouter);

module.exports = router;
