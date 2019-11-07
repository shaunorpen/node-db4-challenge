const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Here's a list of recipies");
});

router.get("/:id/shopping-list", (req, res) => {
  res.status(200).json("Here's the shopping list");
});

router.get("/:id/instructions", (req, res) => {
  res.status(200).json("Here are the instructions");
});

module.exports = router;
