const model = require("../models");
const createState = (req, res) => {
  const state = {
    stateName: req.body.stateName,
    countryName: req.body.countryName,
  };
  model.State.create(state)
    .then((success) => {
      if (success) {
        res.status(201).json({
          message: `${state.stateName} was created`,
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: `not found`,
      });
    });
};
const getState = (req, res) => {
  model.State.findAll()
    .then((success) => {
      if (success) {
        res.status(200).json({
          message: success,
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: `not found`,
      });
    });
};
const getCountryState = (req, res) => {
  const country = req.body.country;
  const descending = req.body.descending;
  model.Country.findAll({ where: { countryName: country } }).then((success) => {
    if (success) {
      model.State.findAll({
        attributes: ["stateName"],
        include: [
          {
            model: model.Country,
            where: { countryName: country },
            attributes: ["countryName"],
          },
        ],
        order: [["stateName", descending ? "DESC" : "ASC"]],
      }).then((success) => {
        if (success) {
          res.status(200).json({
            message: success,
          });
        }
      });
    }
  });
};
module.exports = {
  createState,
  getState,
  getCountryState,
};
