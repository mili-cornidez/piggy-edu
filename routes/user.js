const express = require("express");
const router = express.Router();
const authenticate = require("../security/auth");
const { readData } = require("../utils/fileUtils");

router.get("/", authenticate, (req, res) => {
  const { wallet } = req.user;
  const data = readData();
  
  const user = data.users.find(u => u.wallet === wallet);
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  
  res.json({
    wallet: user.wallet,
    name: user.name
  });
});

module.exports = router;