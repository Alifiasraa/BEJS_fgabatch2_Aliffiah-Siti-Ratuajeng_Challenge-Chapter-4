const {
  createTransactionType,
  getAllTransactionTypes,
  updateTransactionTypeById,
  deleteTransactionTypeById,
} = require("../models/transactionType.model");

const createType = async (req, res) => {
  const { id, description } = req.body;
  try {
    const transactionType = await createTransactionType({
      id,
      description,
    });
    res.status(201).json({
      status: "Success",
      message: "Transaction type created successfully",
      data: transactionType,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getAllTypes = async (req, res) => {
  try {
    const transactionTypes = await getAllTransactionTypes();
    res.status(200).json({
      status: "Success",
      message: "Transaction types retrieved successfully",
      data: transactionTypes,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    const transactionType = await updateTransactionTypeById(id);
    res.status(200).json({
      status: "Success",
      message: "Transaction type retrieved successfully",
      data: transactionType,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const updateTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    const transactionType = await updateTransactionTypeById(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Transaction type updated successfully",
      data: transactionType,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const deleteTypeById = async (req, res) => {
  try {
    const transactionType = await deleteTransactionTypeById(id);
    res.status(200).json({
      status: "Success",
      message: "Transaction type deleted successfully",
      data: transactionType,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = {
  createType,
  getAllTypes,
  getTypeById,
  updateTypeById,
  deleteTypeById,
};
