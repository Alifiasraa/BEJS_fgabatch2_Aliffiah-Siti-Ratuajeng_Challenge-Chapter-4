const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../models/user.model");

const create = async (req, res) => {
  const { name, gender, birth_date, phone_number, email, address_id } =
    req.body;
  try {
    const user = await createUser({
      name,
      gender,
      birth_date,
      phone_number,
      email,
      address_id,
    });
    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: user,
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
    const users = await getAllUsers();
    res.status(200).json({
      status: "Success",
      message: "Users retrieved successfully",
      data: users,
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
    const user = await getUserById(id);
    res.status(200).json({
      status: "Success",
      message: "User retrieved successfully",
      data: user,
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
    const user = await updateUserById(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "User updated successfully",
      data: user,
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
    const user = await deleteUserById(id);
    res.status(200).json({
      status: "Success",
      message: "User deleted successfully",
      data: user,
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
