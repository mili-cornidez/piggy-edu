const express = require("express");
const router = express.Router();
const { readFileSync } = require("fs");
const path = require("path");
const authenticate = require("../backend/security/auth");

router.get("/:levelId", authenticate, (req, res) => {
  const { levelId } = req.params;

  try {
    const levels = JSON.parse(
      readFileSync(path.join(__dirname, "../data/levels.json"), "utf-8")
    ).levels;

    if (!levels[levelId]) {
      return res.status(404).json({ error: `Level ${levelId} not found.` });
    }

    res.json(levels[levelId]);
  } catch (error) {
    console.error("Error reading levels:", error);
    res.status(500).json({ error: "Failed to fetch level." });
  }
});

module.exports = router;
