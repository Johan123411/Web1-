
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');


module.exports = {

  async getTaskById(id) {
    if (!id) throw "You must provide an id to search for";
    
    if(typeof id !== "string") throw "You must provide an id of type string";

    const taskCollection = await todoItems();           
    const daTask = await taskCollection.findOne({ _id: id });     //awaits finding an ID in the todoItems 
    if (daTask === null) throw "No task with that id";             //if task doesnt exist

    return daTask;
  },

  async getAllTasks() {
    const taskCollection = await todoItems();

    const tasks = await taskCollection.find({}).toArray();   //makes an array of all tasks and prints the array of all tasks 

    return tasks;
  },

  async createTask(title, description) {
    if (!title) throw "You must provide a title for your task";

    if(typeof title !== "string") throw "You must provide a title of type string"

    if (!description) 
      throw "You must provide a description of the task";

    if (typeof description !== "string")
      throw "You must provide a description of type string";

    if (description.length === 0) throw "You must provide at least some description for the task";
    const itemCollection = await todoItems();

    let newTask = {
      _id : uuidv4(),    //random id generator SRC: https://www.npmjs.com/package/uuid
      title : title,
      description : description ,
      completed : false ,   
      completedAt : null
    };

    const insertInfo = await itemCollection.insertOne(newTask);   // insert inside the collection
    if (insertInfo.insertedCount === 0) throw "Could not add a new task";

    const newId = insertInfo.insertedId;

    const thisTask = await this.getTaskById(newId);
    return thisTask;
  },
  async removeTask(id) {
    if (!id) throw "You must provide an id to remove";

    if(typeof id !== "string") throw "You must provide an id of type string";

    const task = await todoItems();
    const deleteInfo = await task.removeOne({ _id: id });   //removes a task with the specified id

    if (deleteInfo.deletedCount === 0) {
      throw `Could not delete the task with id of ${id}`;
      return false;
    }
    return true;
  },
  async completeTask(id) {
    if (!id) throw "You must provide an id to search for";

    if(typeof id !== "string") throw "You must provide an id of type string";


    const task = await todoItems();
    const date = new Date();   // creates current data and time SRC: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

    const compTASK = {
        completed: true,  // sets completed to true
        completedAt: date   // sets completedAt to the current time
    }

    const updateInfo = await task.updateOne({ _id: id},{$set: compTASK});  //updates the completed task 

    if (updateInfo.modifiedCount === 0) {
      throw "could not update the task successfully";
    }

    return await this.getTaskById(id);
  }
};


//template taken from the CodeBase from lecture 4 i.e dogs that blog example. 