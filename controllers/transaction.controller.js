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
    transaction_type_id,
    amount,
    note,
    transaction_status,
  } = req.body;

  if (
    !source_account_id ||
    !destination_account_id ||
    !amount ||
    !note ||
    !transaction_status
  ) {
    return res.status(400).json({
      status: "Fail",
      message: "Please provide all required fields",
    });
  }

  if (source_account_id === destination_account_id) {
    return res.status(400).json({
      status: "Fail",
      message: "Source account and destination account cannot be the same",
    });
  }

  const validStatus = ["Success", "Failure", "Pending"];
  if (!validStatus.includes(transaction_status)) {
    return res.status(400).json({
      status: "Fail",
      message:
        "Invalid transaction status. Allowed values are 'Success', 'Failure', or 'Pending'.",
    });
  }

  try {
    const sourceAccount = await account.getAccountById(source_account_id);
    const destinationAccount = await account.getAccountById(
      destination_account_id
    );

    if (!sourceAccount) {
      return res.status(404).json({
        status: "Fail",
        message: "Source account not found",
      });
    }

    if (!destinationAccount) {
      return res.status(404).json({
        status: "Fail",
        message: "Destination account not found",
      });
    }

    if (sourceAccount.balance < amount) {
      return res.status(400).json({
        status: "Fail",
        message: "Insufficient balance",
      });
    }

    const transaction = await createTransaction({
      source_account_id,
      destination_account_id,
      transaction_type_id,
      amount,
      note,
      transaction_status,
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
