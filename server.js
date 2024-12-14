require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

const loginRoutes = require("../routes/login");
const levelsRoutes = require("../routes/levels");

app.use(express.json());

app.use("/login", loginRoutes);
app.use("/levels", levelsRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
