const bcrypt = require('bcrypt');

let user1 =
	{
		username: "masterdetective123",
		firstname: "Sherlock",
		lastname: "Holmes",
		profession: "Detective",
		bio: 'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
		hashedpassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.", 
		cookieID : ""
	};
let user2=	
	{
		username: "lemon",
		firstname: "Elizabeth",
		lastname: "Lemon",
		profession: "Writer",
		bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
		hashedpassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm",
		cookieID: ""
	};
let user3 = 
	{
		username: "theboywholived",
		firstname: "Harry",
		lastname: "Potter",
		profession: "Student",
		bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
		hashedpassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
		cookieID: ""
	};	


async function getUser(username) 
{
	if (!username ||typeof username != 'string')
		throw "Provide a username or it must be of type string"
	
	if (user1.username == username)
		return user1;
	else if (user2.username == username)
		return user2;
	else if (user3.username == username)
		return user3;
	else 
		return undefined;

}
	
async function checkUserPass(username, password) {
	if (!username || typeof username != 'string' || !password || typeof password != 'string')
		throw "username and password must be provided and of type string"
	
	try {
		var user = await getUser(username);
		} catch (e) {
			return false;
		}
	
	if (user && await bcrypt.compare(password, user.hashedpassword))
		return true;
	else
		return false;
}
	
async function getCookie(cookieID) 
{
	if (user1.cookieID == cookieID) 
		return user1;
	else if(user2.cookieID == cookieID)	
		return user2;
	else if(user3.cookieID == cookieID)
		return user3;
	else
		return undefined;
}
	
async function setCookie(username, cookieID) 
{
	if (user1.username == username)
	{	
		user1.cookieID = cookieID;
		return user1.cookieID;
	}
	else if (user2.username == username)
	{
		user2.cookieID = cookieID;
		return user2.cookieID;
	}
	else if (user3.username == username)
	{
		user3.cookieID = cookieID;
		return user3.cookieID;
	}
	else
		return 0;
}
	
async function removeCookie(cookieID) 
{
	if (user1.cookieID == cookieID)
	{	
		user1.cookieID = "";
		return user1.cookieID;
	}
	else if(user2.cookieID == cookieID)
	{
		user2.cookieID = "";
		return user2.cookieID;
	}
	else if(user3.cookieID == cookieID)
	{
		user3.cookieID = "";
		return user3.cookieID;
	}
	else
		return 0;
}
	
module.exports = {
		getUser,
		checkUserPass,
		getCookie,
		setCookie,
		removeCookie
};