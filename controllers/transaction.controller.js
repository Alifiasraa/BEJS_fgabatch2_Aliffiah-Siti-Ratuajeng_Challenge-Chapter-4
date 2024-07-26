const {
  createTransaction,
  getAllTransaction,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
} = require("../models/transaction.model");
const account = require("../models/account.model");

const create = async (req, res) => {
  const {
    source_account_id,
    destination_account_id,
    // transaction_type_id,
    amount,
    note,
    transaction_status,
    transaction_date,
  } = req.body;
  try {
    const transaction = await createTransaction({
      source_account_id,
      destination_account_id,
      //   transaction_type_id,
      amount,
      note,
      transaction_status,
      transaction_date,
    });
    res.status(201).json({
      status: "Success",
      message: "Transaction created successfully",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const transactions = await getAllTransaction();
    res.status(200).json({
      status: "Success",
      message: "Transactions retrieved successfully",
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await getTransactionById(id);
    res.status(200).json({
      status: "Success",
      message: "Transaction retrieved successfully",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await updateTransactionById(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Transaction updated successfully",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await deleteTransactionById(id);
    res.status(200).json({
      status: "Success",
      message: "Transaction deleted successfully",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
