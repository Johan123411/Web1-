const express = require("express");
const router = express.Router();
const data = require("../data");
const recipieData = data.recipies;

router.get("/:id", async (req, res) => 
{    //to get recipies by id 
  try 
  {
    const recipie123 = await recipieData.getRecipieById(req.params.id);   //calls method getRecipieById in the recipie file in the data folder
    res.json(recipie123); //responds with recipie123 to the request 
  } 
  catch (e) 
  {
    console.log(e); //for debugging purposes. 
    res.status(404).json({ error : `${e} has occurred` });  
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/", async (req, res) => 
{    // to get all recipies
  try 
  {
    const recipieList = await recipieData.getAllRecipies(); //calls method getAllRecipies() from the file recipies in the data folder 
    res.json(recipieList);  //responds to the request with a response  (here the req remains unused)
  }
   catch (e) 
  {
    // Something went wrong with the server!
    console.log(e); //for debugging purposes
    res.status(500).json({ error: `${e} has occuurred` });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/", async (req, res) => 
{     //to post a new recipie
    
    const newRecipie = req.body;   //assigns request body to newRecipie

    console.log(newRecipie.title);  // was put in for testing purposes 

    try{
        const {title, ingredients, steps} = newRecipie;  //taken from the lecture code 7 i.e.  CS-546/Lecture Code/lecture_07/intermediate_api/routes/posts.js
        const newData = await recipieData.addRecipie(title, ingredients, steps);
        res.json(newData);  //responds with newData  

    }
    catch(e)
    {
        res.status(500).json({ error: `${e} has occuurred` });   
    }

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.put("/:id", async (req, res) => {     /// to change the pre existing recipie

    const changeRecipies = req.body; 

    try
    {
        await recipieData.getRecipieById(req.params.id);  //gets the recipie by id and if there is an error in getting it , this is caught in the below catch block.
    }
    catch(e)
    {
        console.log(e);
        res.status(404).json({ error: "Recipie not found" });  
        return;
    }

    try
    {
        let updRecipie = await recipieData.changeRecipie(req.params.id, changeRecipies);  //calls method changeRecipie and responds to the request with updRecipie which means updated recipie
        res.json(updRecipie);
    }
    catch(e)
    {
         console.log(e);
        res.status(500).json({ error: `${e} has occuurred` });
        return;
    }

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.patch("/:id", async (req, res) => {    //to modify a pre-existing recipie

    const modifyRecipie = req.body;

    try{
        await recipieData.getRecipieById(req.params.id);
    }
    catch(e)
    {
        res.status(404).json({ error: "Recipie not found" });
        return;  
    }

    try{
        let updRecipie = await recipieData.modifRecipie(req.params.id, modifyRecipie); //calls modifRecipie which modifies certain parts of the recipie
        res.json(updRecipie);
    }
    catch(e)
    {
         console.log(e);
        res.status(500).json({ error: `${e} has occuurred` });
        return;
    }

} );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.delete("/:id", async (req,res) =>{   //to delete a recipie by id 

    try{
        await recipieData.getRecipieById(req.params.id);
    }
    catch(e)
    {
        res.status(404).json({ error: "Recipie not found" });
        return;
    }

    try{
        let a = await recipieData.removeRecipieByID(req.params.id);  //deletes recipie based on the given id
        res.json(a); //comment this out if you dont want any response.. 
    }
    catch(e)
    {
         console.log(e);
        res.status(500).json({ error: `${e} has occuurred` });
        return;
    }

});

module.exports = router;