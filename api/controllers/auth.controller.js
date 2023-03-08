const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register
const Register = async (req, res) => {
  try {
    /* generate new password. */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    /* Creating a new user object. */
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    /* Saving the new user to the database and then sending a response back to the client. */
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    /* This is a catch block. It is used to catch any errors that may occur in the try block. */
    res.status(500).json(error.message);
  }
};

//login
const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User not found");

    /* It is checking if the password is valid. If it is not valid, it
		will send a response back to the client. */
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong Password");

    /* Creating a token for the user. */
    const accessToken = jwt.sign(
      {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
        followers: user.followers,
        followings: user.followings,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      process.env.SECRET_TOKEN,
      {
        expiresIn: "3 days",
      }
    );

    // save user token
    user.token = accessToken;

    // return new user
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports.Register = Register;
module.exports.Login = Login;
