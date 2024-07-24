const prisma = require("../config/prisma");

const createAddress = async (data) => {
  const { description, district, province, country, post_code } = data;

  try {
    const result = await prisma.address.create({
      data: {
        description: description,
        district: district,
        province: province,
        country: country,
        post_code: post_code,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllAddress = async () => {
  try {
    const result = await prisma.address.findMany();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAddressById = async (id) => {
  try {
    const result = await prisma.address.findUnique({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateAddressById = async (id, reqBody) => {
  try {
    const result = await prisma.address.update({
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

const deleteAddressById = async (id) => {
  try {
    const result = await prisma.address.delete({
      where: {
        id: id,
      },
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createAddress,
  getAllAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
};
