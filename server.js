require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const loginRoutes = require("./routes/login");
const levelsRoutes = require("./routes/levels");

app.use("/login", loginRoutes);
app.use("/levels", levelsRoutes);

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}