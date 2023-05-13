const model = require("../models");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const createAdmin = (req, res) => {
  const admin = {
    adminName: req.body.adminName,
    adminPassword: req.body.adminPassword,
  };
  model.Admin.create(admin).then(() => {
    res.status(201).json({
      message: `${admin.adminName} was created`,
    });
  });
};
const adminLogin = (req, res) => {
  const login = {
    adminName: req.body.adminName,
    adminPassword: req.body.adminPassword,
  };
  model.Admin.findOne({
    where: {
      adminName: req.body.adminName,
      adminPassword: req.body.adminPassword,
    },
  })
    .then((success) => {
      if (success == null) {
        res.status(400).json({
          message: "login invalid",
        });
      } else {
        const token = jwt.sign(login, process.env.SECRET, { expiresIn: "1h" });
        if (token) {
          res.status(200).json({
            message: `login successfull`,
            token: token,
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

module.exports = {
  createAdmin,
  adminLogin,
};
