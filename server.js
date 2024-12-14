require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const loginRoutes = require("./routes/login");
const levelsRoutes = require("./routes/levels");
const userRoutes = require("./routes/user");

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.use("/login", loginRoutes);
app.use("/levels", levelsRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});