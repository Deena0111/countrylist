const express = require("express");
const {
  createState,
  getState,
  getCountryState,
} = require("../controller/stateController");
const { authcheck } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/create-state", authcheck, createState);
router.get("/get-state", authcheck, getState);
router.get("/get-country-state", authcheck, getCountryState);
module.exports = router;
