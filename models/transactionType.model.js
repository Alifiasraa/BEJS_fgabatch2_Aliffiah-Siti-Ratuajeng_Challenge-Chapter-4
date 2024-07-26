const prisma = require("../config/prisma");

const createTransactionType = async (data) => {
  const { id, description } = data;
  try {
    const result = await prisma.transaction_type.create({
      data: {
        id: id,
        description: description,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllTransactionTypes = async () => {
  try {
    const result = await prisma.transaction_type.findMany();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTransactionTypeById = async (id) => {
  try {
    const result = await prisma.transaction_type.findUnique({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateTransactionTypeById = async (id, reqBody) => {
  try {
    const result = await prisma.transaction_type.update({
      where: {
        id: id,
      },
      data: reqBody,
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteTransactionTypeById = async (id) => {
  try {
    await prisma.transaction_type.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createTransactionType,
  getAllTransactionTypes,
  getTransactionTypeById,
  updateTransactionTypeById,
  deleteTransactionTypeById,
};
