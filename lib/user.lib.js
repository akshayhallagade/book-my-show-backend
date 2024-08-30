const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateHash = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const compareHash = async (password, hashedPassword) => {
  const isSamePassword = await bcrypt.compare(password, hashedPassword);
  return isSamePassword;
};

const generateToken = async (id, role) => {
  const token = jwt.sign({ id, role }, process.env.JWT_SECRET);
  return token;
};

const getTokenData = async (token) => {
  const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(data);
  return { id, role };
};

module.exports = { generateHash, compareHash, generateToken, getTokenData };
