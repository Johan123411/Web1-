const recipieRoutes = require('./recipies');

const constructorMethod = (app) => 
{
  app.use("/recipies", recipieRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;