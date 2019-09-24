const fs = require("fs");

function checktext(text)              // checks the passed text all the time if its of type string or if the text is undefined or if the text passed is null.
{
    if(typeof text !== "string")
    {
        throw `Not a proper text`;    
    }
    if(text === undefined)
    {
        throw `Text cannot be undefined`;
    }
    if(text === null)
    {
        throw `Text cannot be null`;
    }
}

const simplify = function simplify(str_input)
{
	checktext(str_input);

	str_input=str_input.toLowerCase();             //converts all the charecters in the given string to lower case.
    str_input=str_input.replace(/[^\sa-z]/g,'');   // takes only the letters and ignores all other charecters Source https://stackoverflow.com/questions/23136947/javascript-regex-to-return-letters-only      
    str_input=str_input.replace(/\'/g,"");             //explicitly removes - so that to-do is counted as one word Source 
     
    str_input=str_input.replace(/[\s\n\t]+/g,' '); //replaces all the special charecter used for space , next like and tab are replaced with a space. Source https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
    str_input=str_input.trim();

    return str_input;
}

const createMetrics = function createMetrics(str_input)
{
    //Total letters
    let a = simplify(str_input).replace(/\s/g,'');   //replace all the spaces with no space 

    let letterCounter = 0;

    for(let i = 0; i<a.length ; i++)
    {
    	letterCounter = letterCounter + 1;    
    }
    //*************************************************
    //Total Non Letters
    
    let nonLetterCounter = str_input.replace(/[a-zA-Z]/g,'').length;   //replaces all letters from a-z & A - Z with nothing, hence remaining are only spaces, special charecters and numbers. Source : https://stackoverflow.com/questions/2991901/regular-expression-any-character-that-is-not-a-letter-or-number 

    
    //*************************************************
    //Total Words

   let b = simplify(str_input).split(/[\s-]+/g);                          //takes the simplified string and splits it wherever there is a space, this is assigned to b. Creates an array of substrings    
   let wordCount = 0;
   for(let i =0 ; i < b.length ; i++)
   {
   	wordCount = wordCount + 1 ;                                     //just count the contents of b
   } 
   
  
   
   //*************************************************
   //Total Vowels

   let vowelsCount = 0;
   let ConsonentCount = 0;

   let c = simplify(str_input).replace(/\s/g,'');  // already takes care of the Upper case letters with the simplify function and removes all the spaces
   for (let i = 0; i < c.length ; i++ )
   {
   	if(c.charAt(i) == 'a' || c.charAt(i) == 'e' || c.charAt(i) == 'i' || c.charAt(i) == 'o' || c.charAt(i) == 'u' )   // hence we only check lower case vowels
   	{
   		vowelsCount = vowelsCount + 1;
   	}
   	else
   	{
   		ConsonentCount = ConsonentCount + 1;    // since simplify gets rid of all special charecters and spaces , we can count all letters not a, e, i, o, u as consonents.
   	}
   }

   //*************************************************
   //Total Unique Words 

   let UniqueCount = 0 ;
   let OBj = {};                               //empty object
   let d = simplify(str_input).split(" ");      

   for(let i =0 ; i < d.length ; i++)
   {
   	OBj[d[i]] = "Junk text";                        //object OBj is populated with the number of words in D obtained from the simplify function
   }

   for(let i in OBj)
   {
   	UniqueCount = UniqueCount + 1;               //simply counts the number of unique entries in OBj 
   }
   
     


   //*************************************************
   //Total long words

   let LongCount = 0;

   for (let i =0 ; i < d.length ; i++ )
   {
   	if(d[i].length >= 6)                                      //just checks if word length is greater than or equal to 6
   		LongCount = LongCount + 1;
   } 

  

   //*************************************************
   //Average Word Length
   let count = 0;

   for(let i=0 ; i < d.length ; i++ )
   {
   	count = count + d[i].length;
   }

   let avg = count/wordCount;                                      //counts average 

   //*************************************************
   //word Occurences 
   let obj = {};                                             
   let test = {};                       
   

   for (let i=0 ; i < d.length ; i++)   
   {
      let a1 = d[i];          
      if((a1 in test) == false)                
      {
         test[a1] = true;                                             //object test at location a1 is set to true , hence preventing double counting, these are the objects already seen by the array test
         let count = 0;
         for(let p=0; p < d.length ; p++ )  
         {
            if(d[p] === a1)        
            {
                count++;                     
            }
         }

                  obj[a1]=count;                                        // the count for occurence is put inside the object at location a1 so object a1 is set to count. Same as last week's code for count of charecters. Modified to check for words                         
                  
       }
          
    }

    let metrics123 = {
        totalLetters: letterCounter,
        NonLetters: nonLetterCounter,
        totalWords: wordCount,
        TotalVowels: vowelsCount,
        TotalConsonants: ConsonentCount,
        uniqueWords: UniqueCount,
        longWords: LongCount,
        averageWordLength: avg,
        wordOccurrences: obj
     
    }; 

   

   return metrics123;    


         	
}


module.exports = {
	simplify : simplify,
	createMetrics : createMetrics
}




