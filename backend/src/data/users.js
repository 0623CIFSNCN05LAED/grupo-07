const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getusersData : function () {
      const usersFilePath  = path.join(__dirname, "./usersData.json");
      const users = JSON.parse(fs.readFileSync(usersFilePathFilePath, "utf-8"));
      return users;
    },
    saveProduct: function (Users) {
      const usersFilePath = path.join(__dirname, "./usersData.json");
      fs.writeFileSync(usersFilePath,JSON.stringify("",null,2));
    },
    findAll: function () {
      return this.getusersData();
    },
    findById: function (id) {
      const users = this.getusersData().find((users)=>users.id === id);
      return users;
    }
    };