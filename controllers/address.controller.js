const {
  createAddress,
  getAllAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
} = require("../models/address.model");

const create = async (req, res) => {
  const { description, district, province, country, post_code } = req.body;

  if (!description || !district || !province || !country || !post_code) {
    return res.status(400).json({
      status: "Fail",
      message: "Please provide all required fields",
    });
  }

  try {
    const address = await createAddress({
      description,
      district,
      province,
      country,
      post_code,
    });
    res.status(201).json({
      status: "Success",
      message: "Address created successfully",
      data: address,
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
    const addresses = await getAllAddress();
    res.status(200).json({
      status: "Success",
      message: "Addresses retrieved successfully",
      data: addresses,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const address = await getAddressById(id);
    res.status(200).json({
      status: "Success",
      message: "Address retrieved successfully",
      data: address,
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
    const id = parseInt(req.params.id);
    const address = await updateAddressById(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Address updated successfully",
      data: address,
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
    const id = parseInt(req.params.id);
    const address = await deleteAddressById(id);
    res.status(200).json({
      status: "Success",
      message: "Address deleted successfully",
      data: address,
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
