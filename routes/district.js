const express = require("express");
const {
  createDistrict,
  getDistrict,
  getStateDistrict,
} = require("../controller/districtController");
const { authcheck } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/create-district", authcheck, createDistrict);
router.get("/get-district", authcheck, getDistrict);
router.get("/get-state-district", authcheck, getStateDistrict);
module.exports = router;
