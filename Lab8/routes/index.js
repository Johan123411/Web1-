const form = require("./form");
const palindrome = require("./palindrome");

function constructorMethod(app) {
	app.use("/result", palindrome);
	app.use("/", form);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route not found."}); //if the routes are not found
	});
};

module.exports = constructorMethod;
