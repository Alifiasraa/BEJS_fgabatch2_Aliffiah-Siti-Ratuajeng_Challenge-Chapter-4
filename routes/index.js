const { Router } = require("express");
var router = Router();
const v1Router = require("./v1");

router.use("/v1", v1Router);

module.exports = router;
