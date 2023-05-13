const express = require("express");
const {
  createCountry,
  getCountry,
} = require("../controller/countryController");
const { authcheck } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/create-country", authcheck, createCountry);
router.get("/get-country", authcheck, getCountry);
module.exports = router;
