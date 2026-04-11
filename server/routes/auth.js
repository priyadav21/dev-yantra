const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.json({
    success: true,
    message: "User registered successfully",
  });
});

module.exports = router;
