const prisma = require("../config/prisma");

const createAccount = async (data) => {
  const { user_id, account_number, balance, account_status } = data;

  try {
    const result = prisma.account.create({
      data: {
        user_id: user_id,
        account_number: account_number,
        balance: balance,
        account_status: account_status,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllAcounts = async () => {
  try {
    const result = await prisma.account.findMany();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAccountById = async (id) => {
  try {
    const result = await prisma.account.findUnique({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateAccountById = async (id, reqBody) => {
  try {
    const result = await prisma.account.update({
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

const deleteAccountById = async (id) => {
  try {
    await prisma.account.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createAccount,
  getAllAcounts,
  getAccountById,
  updateAccountById,
  deleteAccountById,
};
