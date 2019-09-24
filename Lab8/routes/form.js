const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("palindrome/form");  //responds with the form handlebar
});

module.exports = router;