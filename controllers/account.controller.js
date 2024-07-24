const {
  createAccount,
  getAllAcounts,
  getAccountById,
  updateAccountById,
  deleteAccountById,
} = require("../models/account.model");

const create = async (req, res) => {
  const { user_id, account_number, balance, account_status } = req.body;
  try {
    const account = await createAccount({
      user_id,
      account_number,
      balance,
      account_status,
    });
    res.status(201).json({
      status: "Success",
      message: "Account created successfully",
      data: account,
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
    const accounts = await getAllAcounts();
    res.status(200).json({
      status: "Success",
      message: "Accounts retrieved successfully",
      data: accounts,
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
    const account = await getAccountById(id);
    res.status(200).json({
      status: "Success",
      message: "Account retrieved successfully",
      data: account,
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
    const account = await updateAccountById(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Account updated successfully",
      data: account,
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
    const account = await deleteAccountById(id);
    res.status(200).json({
      status: "Success",
      message: "Account deleted successfully",
      data: account,
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
