const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/users.json");

const readData = () => {
  return JSON.parse(readFileSync(dataFilePath, "utf-8"));
};

const writeData = (data) => {
  writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };