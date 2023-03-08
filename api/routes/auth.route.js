const router = require("express").Router();

const { Register, Login } = require("../controllers/auth.controller");

//REGISTER ROUTER
router.post("/register", Register);

//LOGIN ROUTER
router.post("/login", Login);

module.exports = router;
