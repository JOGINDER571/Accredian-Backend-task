const express = require("express");
const router = express.Router();
const referralController = require("../controllers/referralController");

router.post("/submit", referralController.submitReferral);
// Route for fetching all referrals
router.get("/all", referralController.getAllReferrals);
module.exports = router;
