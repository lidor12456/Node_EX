const chalk = require("chalk");
const yargs = require("yargs");
const users = require("./users.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    mail: {
      describe: "User mail",
      demandOption: true,
      type: "string",
    },
    // body: {
    //   describe: "User body",
    //   demandOption: true,
    //   type: "string",
    // },
  },
  handler(argv) {
    users.addUser(argv.name, argv.mail);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.removeUser(argv.name);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your users",
  handler() {
    users.listUsers();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.name);
  },
});

yargs.parse();
