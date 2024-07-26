const prisma = require("../config/prisma");

const createUser = async (data) => {
  const { name, gender, birth_date, phone_number, email, address_id } = data;

  try {
    const result = await prisma.user.create({
      data: {
        name: name,
        gender: gender,
        birth_date: birth_date,
        phone_number: phone_number,
        email: email,
        address_id: address_id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserById = async (id) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateUserById = async (id, reqBody) => {
  try {
    const result = await prisma.user.update({
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

const deleteUserById = async (id) => {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
