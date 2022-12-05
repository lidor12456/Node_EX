const fs = require("fs");
const chalk = require("chalk");

const addUser = (name, mail) => {
  const users = loadUsers();
  const duplicateUser = users.find((user) => user.name === name);

  if (!duplicateUser) {
    users.push({
      name: name,
      mail: mail,
    });
    saveUsers(users);
    console.log(chalk.green.inverse("New user added!"));
  } else {
    console.log(chalk.red.inverse("User name taken!"));
  }
};

const removeUser = (name) => {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => user.name !== name);

  if (users.length > usersToKeep.length) {
    console.log(chalk.green.inverse("User removed!"));
    saveUsers(usersToKeep);
  } else {
    console.log(chalk.red.inverse("No user found!"));
  }
};

const listUsers = () => {
  const users = loadUsers();

  console.log(chalk.inverse("Your users"));

  users.forEach((user) => {
    console.log(user.name);
  });
};

const readUser = (name) => {
  const users = loadUsers();
  const user = users.find((user) => user.name === name);

  if (user) {
    console.log(chalk.inverse(user.name));
    console.log(user.mail);
  } else {
    console.log(chalk.red.inverse("User not found!"));
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addUser: addUser,
  removeUser: removeUser,
  listUsers: listUsers,
  readUser: readUser,
};
