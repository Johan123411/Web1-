const todo = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
try{
   
        const task1 = await todo.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log("A new task has been added to the collection!! \n");
        console.log("INSERT TASK 1 !!!");
        console.log(task1);
        console.log("\n");
        console.log("======================================================================");

        const task2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        console.log("Another task has been added to the collecton!! \n");
        console.log("INSERT TASK 2 !!!");
        console.log("Displaying task2");
        console.log(task2);
        console.log("\n");
        console.log("======================================================================");
        console.log("\n");

        const getTasks = await todo.getAllTasks();
        console.log("Getting all tasks!!");
        console.log(getTasks);
        console.log("\n")
        console.log("======================================================================");
        console.log("\n");
    
        console.log("Removing the first task!!")
        
        const A = await todo.removeTask(task1._id);  
        if(A == true)
        {
        	console.log("AYYY DELETE SUCCESSFULL  !!!");
        }
        else
        {
        	console.log("AYY FAIL !!!");
        }

        const getTasks2 = await todo.getAllTasks();
        console.log("Getting tasks after task 1 being removed \n");
        console.log(getTasks2);
        console.log("\n");
        console.log("======================================================================");
        console.log("\n");

        const completedTask = await todo.completeTask(task2._id);
        console.log("Task2 is COMPLETED!!!! HUZAAHHH!!!");
        console.log(completedTask);
        console.log("\n");
        console.log("===============================END====================================");

       
}
catch(error)
{
        throw `${error}`;    
}
finally 
{
	const db = await connection();
    await db.serverConfig.close();
}
}



main().catch(error => {
    console.log(error);
  });


    

