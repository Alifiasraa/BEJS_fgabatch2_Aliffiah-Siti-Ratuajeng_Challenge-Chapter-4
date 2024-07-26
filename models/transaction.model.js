const prisma = require("../config/prisma");

const createTransaction = async (data) => {
  const {
    source_account_id,
    destination_account_id,
    // transaction_type_id,
    amount,
    note,
    transaction_status,
    transaction_date,
  } = data;

  try {
    const result = await prisma.transaction.create({
      data: {
        source_account_id,
        destination_account_id,
        // transaction_type_id: transaction_type_id,
        amount,
        note,
        transaction_status,
        transaction_date,
      },
      include: {
        sourceAccount: true,
        destinationAccount: true,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllTransaction = async () => {
  try {
    const result = await prisma.transaction.findMany();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTransactionById = async (id) => {
  try {
    const result = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateTransactionById = async (id, reqBody) => {
  try {
    const result = await prisma.transaction.update({
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

const deleteTransactionById = async (id) => {
  try {
    await prisma.transaction.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
};
