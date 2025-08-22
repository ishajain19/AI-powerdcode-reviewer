const express = require('express');
const aicontroller = require("../controller/ai.controller"); // Destructure the named export
const router = express.Router();

router.post("/get-review", aicontroller.getReview);

module.exports = router;