const model = require("../models");
const createDistrict = (req, res) => {
  const district = {
    districtName: req.body.districtName,
    districtState: req.body.districtState,
    districtCountry: req.body.districtCountry,
  };
  model.District.create(district)
    .then((success) => {
      if (success) {
        res.status(201).json({
          message: `${district.districtName} was created`,
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: `not found`,
      });
    });
};
const getDistrict = (req, res) => {
  model.District.findAll()
    .then((success) => {
      if (success) {
        res.status(200).json({
          message: success,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: `Error occurred while fetching districts`,
        error: error.message,
      });
    });
};
const getStateDistrict = (req, res) => {
  const state = req.body.state;
  const descending = req.body.descending;
  model.State.findAll({ where: { stateName: state } }).then((success) => {
    if (success) {
      model.District.findAll({
        attributes: ["districtName"],
        include: [
          {
            model: model.State,
            where: { stateName: state },
            attributes: ["stateName"],
          },
        ],
        order: [["districtName", descending ? "DESC" : "ASC"]],
      }).then((success) => {
        res.status(200).json({
          message: success,
        });
      });
    }
  });
};
module.exports = {
  createDistrict,
  getDistrict,
  getStateDistrict,
};
