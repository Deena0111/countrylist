const model = require("../models");

const createCountry = (req, res) => {
  const country = {
    countryName: req.body.countryName,
  };
  model.Country.create(country)
    .then((success) => {
      if (success) {
        res.status(201).json({
          message: `${country.countryName} was created`,
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: `not created`,
      });
    });
};
const getCountry = (req, res) => {
  model.Country.findAll()
    .then((success) => {
      res.status(200).json({
        message: success,
      });
    })
    .catch(() => {
      res.status(404).json({
        message: `not found`,
      });
    });
};
module.exports = {
  createCountry,
  getCountry,
};
