const { generateHash, generateToken, compareHash } = require("../lib/user.lib");
const UserModel = require("../model/users.model");

const handleSignUp = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, email, password } = req.body;

    // Gen Hashed
    const hashedPassword = await generateHash(password);

    // Add into DB
    const newData = await UserModel.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password: hashedPassword,
    });

    // Gen JWT
    const token = await generateToken(newData._id, "user");

    return res.json({
      message: "Account generated successfully",
      token: token,
      id: newData._id,
    });
  } catch (error) {
    //Validation Error
    if (error.name === "ValidationError")
      return res.json({ message: error.message });
    //Duplicate Email Error
    if (error.code === 11000)
      return res
        .status(401)
        .json({ message: "user with the email already exist." });

    return res.json({ error: error.message });
  }
};

const handleSignIn = async (req, res) => {
  try {
    const { email } = req.body;

    //Check if email exist in Database
    const newData = await UserModel.findOne({ email });
    if (!newData)
      return res.status(401).json({ message: "Email didn't exist" });

    // Compare Password
    if (await compareHash(req.body.password, newData.password)) {
      // create JWT token
      const token = await generateToken(newData._id, newData.role);
      return res.json({
        message: "Log in Successfully",
        id: newData._id,
        role: newData.role,
        token,
      });
    }

    return res.status(401).json({ message: "Wrong Credentials !" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = { handleSignUp, handleSignIn };
