const bluebird =  require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path)
{
	if(!path)
	{
		throw `The ${path} has not been provided`;
	}

	if(typeof path !== "string")
	{
		throw `The path is not of type string`;                
	}

	try
	{
		let File_To_String = await fs.readFileAsync(path, {encoding : 'utf8'});

		return File_To_String;
    }
    catch(e)        //if the file operation fs.readFileAsync fails to return a promise , the error is caught and thrown to the location calling the getFileAsString function. which is later caught in the app.js file
    {
    	throw  `The operation has encountered ${e}` ; // this gets thrown to app.js and its finally caught in the last catch block
    }
}


//*****************************************************************************************************************************

async function getFileAsJSON(path)
{
	if(!path)              //check if the path is provided
	{
		throw `The path has not been provided`;
	}
	if(typeof path !== "string")  //check if the type of the path provided is string or not
	{
		throw `The path is not of type string`;
	}

	try
	{
		let File_To_String = await fs.readFileAsync(path, {encoding : 'utf8'});

		let File_To_JSON = JSON.parse(File_To_String);

		return File_To_JSON;
    }
    catch(e)
    {
    	throw `The operation has encountered ${e}`;  // this gets thrown to app.js and its finally caught in the last catch block
   
    }
}

//*****************************************************************************************************************************

async function saveStringToFile(path , text)
{
	if(!path)                   //check if the path is provided
	{
		throw `The path has not been provided`; 
	}

	if(!text)                   // check if the text has been provided
	{
		throw `The text has not been provided`;
	}

	if(typeof path !== "string")
	{
		throw `The path is not of type string`;   //checks if the path given is of type string
	}

	if(typeof text !== "string")                  // checks if the type of the text given is string
	{
		throw `The text provided is not of type string`;
	}

	try
	{
		await fs.writeFileAsync(path , text);

		return true;
    }
    catch(e)
    {
    	throw `The operation has encountered ${e}`;  // this gets thrown to app.js and its finally caught in the last catch block
   
    }
}


//*****************************************************************************************************************************

async function saveJSONToFile(path , obj)
{
	if(!path || !obj)
	{
		throw `The path or object has not been provided`;
	}
	
	if(typeof path !== "string")
	{
		throw `The path is not of type string`;
	}

	if(typeof obj !== "object")  
	{
		throw `The object has not been provided`;
	}

	try
	{
		let file_as_JSON_OBJ = JSON.stringify(obj);

		await fs.writeFileAsync(path , file_as_JSON_OBJ);

		return true;
    }
    catch(e)
    {
    	throw `The operation has encountered ${e}`;  // this gets thrown to app.js and its finally caught in the last catch block
   
    }
}
//*****************************************************************************************************************************

module.exports = {
	
	getFileAsString,
	getFileAsJSON,
	saveJSONToFile,
	saveStringToFile 
};