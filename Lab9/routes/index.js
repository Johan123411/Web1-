function constructorMethod(app)
{
	app.use("/", (req, res) => {
		res.render("palindrome/form");
	});

	app.use("*", (req, res) => {
		res.status(404).json({error: "invalid route"});
	});
}

module.exports = constructorMethod;

