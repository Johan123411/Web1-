const express = require('express');
const exphbs =  require('express-handlebars')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userData = require("./data/users");


const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const static = express.static(__dirname + "/public");
app.use("/public", static);

app.get("/",async(req,res) => {
	let auth;
	try {
		auth = await userData.getCookie(req.cookies.AuthCookie) !== undefined;
	} catch (e) {
		auth = false;
	}

	if (auth)
		res.redirect('/private');
	else {
		res.render('formStuff/form');
	}

});

app.post("/login", async(req, res) =>{
	const username = req.body.username;
	const password = req.body.password;
	
	let err = false;
	let auth = false;
	try {
		auth = await userData.checkUserPass(username, password);
	} catch (e) {
		err = true; 
	}

	if (auth) {
		let CookieID = username;
		res.cookie("AuthCookie", CookieID);
		userData.setCookie(username, CookieID);

		res.redirect("/private");
	} else {
		res.render("formStuff/error");
	}

});

app.get("/logout", async(req, res) =>{

	res.cookie("AuthCookie", "", {expires: new Date()});
	res.clearCookie("AuthCookie");

	res.render("formStuff/logout");
});


app.get("/private", async(req,res) => {
	const AuthCookie = req.cookies.AuthCookie;
	let user = await userData.getCookie(AuthCookie);
	let auth = user !== undefined;

	if (auth) {
		let data = {user : user}
		res.render("formStuff/private", data);
	} else {
		res.render("formStuff/error");
	}
});



app.listen(3000, () => 
{
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
	if (process && process.send) process.send({done: true});
});