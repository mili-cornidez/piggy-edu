require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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