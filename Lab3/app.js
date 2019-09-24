const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const fileData = require("./FileData");
const text_Metrics = require("./textMetrics");


async function main(path)
{

	try 
	{
		
    	let result;
    	try
    	{
    		let getProg = await fs.accessAsync(path);        
    		file_exists = true;   // if file exists the value is set to true
    	}
    	catch (error)
    	{
    		file_exists = false;  // if error occurs then file_exists is set to false
    	}

    	if (file_exists == true)     //checks if file exists in directory
    	{
    		result = await fileData.getFileAsJSON(path + '.result.json');  // asynchronously calls for the method getFileAsJSON, and if the file exists then it prints the result
    	}
       	else 
    	{
        	let str1 = await fileData.getFileAsString(path + '.txt');   //asynchronously calls the method getFileAsString 
        	let str2 = text_Metrics.simplify(str1);                         // calls the simplify method and saves the value in str
      		fileData.saveStringToFile(path + '.debug.txt', str2);      // saves the contents of str to the given path.debug.txt, if it comes to this section of the loop, path.debug.txt doesnt exist and it hence creates it in the same directory
        	result = text_Metrics.createMetrics(str1);                 //saves operations of method createMetrics to result
        	await fileData.saveJSONToFile(path + '.result.json', result);    //saves the Json object to the path.result.json file
   		}

   		console.log("Operations for the file " + path + '.txt');
   		console.log("====================================");
   		console.log("\n"); 	
        console.log(result);
        console.log("\n");
        console.log("**********************************************************************************************************");
        console.log("\n");

	}
	catch (error) 
	{
    	 console.log(`${error} has occured`);  //catches any error that might have occured throughout the loop. 
	}
}

//main("chapter3");



main("chapter1");



//main("chapter2")



