const About123 = require("./about");
const Story123 = require("./story");
const Education = require("./education");

const constructorMethod = app => {
  app.use("/about", About123);
  app.use("/story", Story123);
  app.use("/education", Education);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;


// code template from the lab 6 lecture codes. 