const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;

const usersApi = {
  list: async (req, res) => {
    try {
      let users = await Users.findAll({
        include: ["roles"],
      });
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error.");
    }
  },
  detail: async (req, res) => {
    try {
      let users = await Users.findByPk(req.params.id, {
        include: ["sales"],
      });
      console.log(users);
      res.render("productDetail", { users: users });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor.");
    }
  },
};

module.exports = usersApi;
