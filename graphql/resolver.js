// yarn add prisma @prisma/client
// yarn prisma init
// thay đổi thông tin để kết nối CSDL
// yarn prisma db pull
// yarn prisma generate
// sử dụng bcrypt để mã hóa pwd

const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const resolverGraphql = {
  getUser: async () => {
    const data = await model.user.findMany();
    return data;
  },

  createUser: async (agru) => {
    try {
      await model.user.create({ data: agru });
      return "Create success !";
    } catch (error) {
      return error.message;
    }
  },

  updateUser: async (agru) => {},
  deleteUser: async (agru) => {},
};

module.exports = { resolverGraphql };
