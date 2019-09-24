const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const configRoutes = require('./routes');



// const dbConnection = require("../Assignment7/config/mongoConnection");
// const data = require("../Assignment7/data");
// const recipies = data.recipies;

// async function main() {
//   const db = await dbConnection();
//   await db.dropDatabase();

//   let ingredients = [{ name: "Egg", amount: "2 eggs" }, { name: "Olive Oil", amount: "2 tbsp" }];

//   let steps = ["First, heat a non-stick pan on medium-high until hot",
//   "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
//   "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
//   "Gently pour the egg from the bowl onto the oil",
//   "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
//   "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
//   "Remove from oil and plate",
//   "Repeat for second egg"];


//   await recipies.addRecipie("Fried Eggs",ingredients,steps);

//   await db.serverConfig.close();
// } ------------->> implimenting this in main returns the following error message "error": "MongoError: Topology was destroyed has occuurred"
// if seed is used instead it works properly ?? why is this ?? 



//main();


app.use(bodyParser.json());
configRoutes(app);


app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});


//referenced lab4 , lab6 and lab7 lectrure codes. 