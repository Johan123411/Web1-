const mongoCollections = require("../config/mongoCollections");
const recipies = mongoCollections.recipies;
const uuidv4 = require("uuid/v4");


let exportMethods = {

async  getRecipieById(id)          



{
    if(!id || typeof id != "string")   // if the id is provided or the type of id is of type string
    {
        throw "ID missing or improper id input";
    }


    let recipieByID = await recipies();
    let recipie = await recipieByID.findOne({ _id: id });    //looks for a recipie in the database and stores in recipie

    if(!recipie)   //if the recipie has not been found
    {
        throw "Recipie not found!! ";
    }

    return recipie;

},
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async  getAllRecipies()
{   

    let RecipiesColl = await recipies();
    let CollectionRecipies = await RecipiesColl.find({}).toArray();  // converts the recipe collections to array

    let FilterRecipies = [];   // new empty array  
    let i = 0;   

    while(i<CollectionRecipies.length)   //SRC :- https://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find
    {
        let newSTUFF = {
            _id: CollectionRecipies[i]._id,     //assigns _id of the object newStuff to the id of recipe collection at position i. 
            title: CollectionRecipies[i].title  //assigns title of the object newStuff to th title of recipie collection at position i
        }
        FilterRecipies[i]=newSTUFF;  //push the  object newStuff into the empty array FilterRecipies
        
        i++;
          
    }

    return FilterRecipies;   //return the newly filled empty array 

},


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async addRecipie(title, ingredients, steps)
{

    if(!title)   // if title is not provided
    {
        throw " You MUST provide a title";   
    }
    if(!ingredients)   //if array of ingredients are not provided
    {
        throw " You MUST provide an array of ingredients";
    }
    if(!steps)    //if array if steps are not provided 
    {
        throw " You MUST provide an array of steps to perform";
    }
    if(typeof title !== 'string')    //checks if type of title is string
     {
         throw " The title must be of type STRING";
     }
    if(Array.isArray(ingredients)== false)//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    {
        throw " the ingredients are not of type array";  //   ingredients = []   //UNCOMMENT THIS BLOCK TO TYPECAST
    }
    if(Array.isArray(steps)== false)  // checks if steps is of type array 
    {
       throw " the steps are not of type array";       //     steps = []         //UNCOMMENT THIS BLOCK TO TYPECAST
    }

    let thisRecipie =  await recipies();

    const newITEM = 
    {
        _id: uuidv4(),                      //set a random id
        title: title,                       // set the title
        ingredients: ingredients,           //set the array of ingredients
        steps: steps                        //set the array of steps

    };


     const newInsertInformation = await thisRecipie.insertOne(newITEM);  //insert the new item into the recipie database.

    let aValue = newInsertInformation.insertedId;
    
    return await this.getRecipieById(aValue);   //returns the newly inserted recipie

},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async  changeRecipie(id, newRecipie)
{
    if(!id)
    {
        throw " You must provide an id";  //if id is not provided 

    }

    if(!newRecipie.title)             // if the title is not provided
    {
        throw " You must provide a title"
    }

    if(typeof newRecipie.title !== "string")    // if the title is of the type string
    {
        throw " You must provide a title of type string";
    }

    if(!newRecipie.ingredients)    //  if the ingredients are provided or not
    {
        throw " You must provide ingredients for the new recipie";
    }

    if(Array.isArray(newRecipie.ingredients) == false)   //  if the ingredients provided are of type array 
    {
        throw " Your ingredients must be of type array";
    }

    if(!newRecipie.steps)  // if the steps have been provided or not 
    {
        throw " You must include steps for your recipie";
    }

    if(Array.isArray(newRecipie.steps) == false)   // if the steps are of type array 
    {
        throw " Your steps must be of type array";
    }

    const thisRecipie = await recipies();
    await thisRecipie.updateOne({ _id: id },{$set: newRecipie});
    const newLocal = await this.getRecipieById(id);   //visual studio code auto generated... don't know why 
    return newLocal;  // this is to get the changed recipie by id as we are required to return the changed recipie.
    
},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async  modifRecipie(id, updatedRecipie)
{
    if(!id)   //if id is provided or not
    {
        throw " You must provide an id";

    }
    if(!updatedRecipie)   //if the changes in the recipe has been provided or not
    {
        throw " You must provide a change in recipie"
    }
    if(updatedRecipie.title)    // if the user wants to change the title i.e upon the entry of title  it checks if the title provided is of type string
    {
       if(typeof updatedRecipie.title !== "string")
       {
         throw "You must include a title of type string"
       }
    }
    if(updatedRecipie.ingredients)   //if the user wants to change the ingredients only , it checks if the ingredients are an array or not
    {
        if(Array.isArray(updatedRecipie.ingredients) == false)
        {
            throw " Your ingredients must be of type array";
        }
    }
    
    if(updatedRecipie.steps)
    {
        if(Array.isArray(updatedRecipie.steps) == false)   //if the user wants to change the steps only, it checks if the steps are of type array or not
        {
            throw " Your steps must be of type array";
        }
    }

    const thisRecipie = await recipies();
    await thisRecipie.updateOne({ _id: id },{$set: updatedRecipie});
    return await this.getRecipieById(id);  // this is to get the changed recipie by id as we are required to return the changed recipie.


},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async removeRecipieByID(id)
{

    if(!id)                                         //template from lab 7 code. 
    {
        throw "Improper iD input";                   
    }
    const removeRecipi = await recipies();
    const deletionInfo = await removeRecipi.removeOne({ _id: id });
    if( deletionInfo.deletedCount == 0)
    {
        throw `couldn't delete recipie with id : ${id}`;
    }
    else return " deleted!! ";   //upon successfull deletion it says ok

    //returns nothing hence in postman this gets stuck ... if we set a return value we can assume that this block works

    //if you dont want the function to return anything then just comment line 207 
  

}

}

module.exports = exportMethods; 

// module.exports = {
//     removeRecipieByID,
//     modifRecipie,
//     changeRecipie,
//     addRecipie,
//     getAllRecipies,
//     getRecipieById


// }