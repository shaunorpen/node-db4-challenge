const express = require("express");
const cookbook = require("./cookbookModel");

const router = express.Router();

router.get("/recipes", (_req, res) => {
  cookbook
    .getAllRecipes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/recipes/:id/shoppingList", (req, res) => {
  cookbook
    .getShoppingList(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/recipes/:id/instructions", (req, res) => {
  cookbook
    .getInstructions(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/ingredients/:id/recipes", (req, res) => {
  cookbook
    .getRecipesForIngredient(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
