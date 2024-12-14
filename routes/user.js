const express = require("express");
const router = express.Router();
const authenticate = require("../security/auth");
const { readData, writeData } = require("../utils/fileUtils");

router.get("/", authenticate, (req, res) => {
  const { wallet } = req.user;
  const data = readData();
  
  const user = data.users.find(u => u.wallet === wallet);
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  
  res.json({
    wallet: user.wallet,
    level: user.level
  });
});

router.put("/level", authenticate, (req, res) => {
  const { wallet } = req.user;
  const data = readData();
  
  const user = data.users.find(u => u.wallet === wallet);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Validación: no incrementar si el nivel ya es 3
  if (user.level >= 3) {
    return res.status(400).json({
      error: "Maximum level reached",
      wallet: user.wallet,
      level: user.level,
    });
  }

  user.level = (user.level || 0) + 1;
  writeData(data);

  res.json({
    message: "Level incremented",
    wallet: user.wallet,
    level: user.level,
  });
});


module.exports = router;