const bcrypt = require("bcryptjs");

const hashPassword = (password) => bcrypt.hashSync(password, 10);
const compareHash = (password, hashed) => bcrypt.compareSync(password, hashed);

module.exports = { hashPassword, compareHash };
