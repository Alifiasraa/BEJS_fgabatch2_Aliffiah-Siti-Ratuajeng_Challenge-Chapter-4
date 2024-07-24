const { Router } = require("express");
var router = Router();
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../../../controllers/account.controller");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
