const { Router } = require("express");
var router = Router();
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} = require("../../../controllers/transaction.controller");
const {
  createType,
  getAllTypes,
  getTypeById,
  updateTypeById,
  deleteTypeById,
} = require("../../../controllers/transactionType.controller");

// transaction
router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

// transaction_type
router.post("/type", createType);
router.get("/type", getAllTypes);
router.get("/type/:id", getTypeById);
router.put("/type/:id", updateTypeById);
router.delete("/type/:id", deleteTypeById);

module.exports = router;
