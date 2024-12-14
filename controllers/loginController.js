const jwt = require("jsonwebtoken");
const { readData, writeData } = require("../utils/fileUtils");

const SECRET_KEY = process.env.SECRET_KEY;

const loginUser = (req, res) => {
  const { wallet, name } = req.body;

  if (!wallet || !name) {
    return res.status(400).json({ error: "Wallet and name are required." });
  }

  const data = readData();

  let user = data.users.find((u) => u.wallet === wallet);

  if (!user) {
    user = { wallet, name };
    data.users.push(user);
    writeData(data);
  } else {
    user.name = name;
    writeData(data);
  }

  const token = jwt.sign({ wallet: user.wallet }, SECRET_KEY, { expiresIn: "1h" });

  res.json({
    message: "Login successful",
    user,
    token,
  });
};

module.exports = { loginUser };
