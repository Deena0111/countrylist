const express = require("express");
const { createAdmin, adminLogin } = require("../controller/adminController");
const { authcheck } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/create-admin", createAdmin);
router.get("/admin-login", adminLogin);
module.exports = router;
