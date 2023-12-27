const express = require("express");
const { sendEmailController } = require('../controllers/portfolioControllers.js');
const router = express.Router();

// router
router.post('/sendEmail', sendEmailController);

// export
module.exports = router;
