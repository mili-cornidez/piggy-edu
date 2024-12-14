const defaultData = {
  users: []
};

const readData = () => {
  return defaultData;
};

const writeData = (data) => {
  defaultData.users = data.users;
};

module.exports = { readData, writeData };