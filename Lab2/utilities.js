function checkIsObj(obj)
{
    if (typeof obj !== "object"){
        throw `${obj || "provided variable"} is not of type Object`;
    }
    if (Object.keys(obj).length == 0)
        throw `${obj || "provided variable"} is an empty object`;
}; 

function checkIsStr(str, variableName)
{
    if (typeof str !== "string"){
        throw `${variableName || "provided variable"} is not of type string`;
    }
    if (str.length == 0){
        throw `${variableName || "provided variable"} is an empty string`;
    }
};

function checkIsArr(arr, variableName)
{
    if (Array.isArray(arr) == false){
        throw `${variableName || "provided variable"} is not of type array`;
    }
    if (arr.length == 0)
    {
        throw `${variableName || "provided variable"} is an empty array`;
    }
};


const deepEquality = function deepEquality(obj1, obj2)
{ checkIsObj(obj1);
  checkIsObj(obj2);

  let object1 = obj1;
  let object2 = obj2;
  let s = deeperEquality(object1,object2);                      //calling deeper equality as checking for errors in object values obj1 , obj2 in the recursive function gives a logical error
  return s;
};  
const deeperEquality = function deeperEquality(object1,object2)
{
    if (object1===object2)                        // if there is a declaration such that let a = {a:1 ,b:20}; then let b = a; this returns true
    return true;

    else if (get_props(object1,object2) == true)  //calls function get_props that checks properties of the objects obj1 & obj2
    {
        for(let a in object1)                  // if all the conditions succeeed then iterate a loop where 'a' traverses the contents of obj1 ["Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in"]
            {
             if(a in object2)                   // if the key 'a' exists in obj2 
                {
                    if(deeperEquality(object1[a],object2[a]) == false) 
                     {
                         return false;
                     }
            
                 }
             else
                return false;               //if the key 'a' doesn't exist in obj2
            }
            return true;                    //after recursion if no false is returned and 'a' has traversed the entirety of obj1 and checked its occurence in obj2 , it then returns true.
 
    }
    else 
        return false;                       //if either obj1 or obj2 are NULL

};


const get_props = function get_props(obj1,obj2)
{
    if(obj1 !=null && obj2 != null ) //checks if either obj1 or obj2 is NULL
    {
        if(typeof obj1 ==="object" && typeof obj2 ==="object") //checks type of obj1 & obj2 to be "object"
          {
            if(Object.keys(obj1).length === Object.keys(obj2).length) //Object.keys(obj1).length [Source:https://stackoverflow.com/questions/5223/length-of-a-javascript-object by James Coglan]
            {
                return true;
            }
            else
                return false;
          }     
        else
            return false;
    }
    else 
        return false;
};

//********************************************************************************************************************** ***************************************

const uniqueElements  = function uniqueElements(arr)
{
    checkIsArr(arr,"Given Variable ");

    let arr1 = [];                        //random local array
    let checker = {};                     //random local object
  
    for(let i = 0 ; i < arr.length ; i++)
    {
        let a1 = arr[i];

        if((a1 in checker)== false)          //checks if the charecter at arr[i] doesn't exists in the object checker
        {
            checker[a1] = true;       // [ "Syntax:objectname[key]=value; "] if condition satisfied = the value of object checker, at key a1 is set to true , hence it fails the if condition in the next iteration
            arr1.push(a1);            //if its unique it's pushed into the array arr1[]
        }
             
    }
    let count = 0;             

    for(let p = 0; p < arr1.length ; p++)  //since arr1 is now filled with unique elements obtained from arr 
    {
        count = count + 1;
    }
    return count;                         // the number of elements in arr1 is counted and the value of count is returned 

};

//*************************************************************************************************************************************************************

const countOfEachCharacterInString = function countOfEachCharacterInString(str)
{
        checkIsStr(str,"Given variable");
        let obj = {};                        //random local object
        let test = {};                       //random local object
        let string1 = str.toString();

        for (let i=0 ; i < string1.length ; i++)   //loop through the string
        {
              let a1 = string1.charAt(i);          //the charecter at position i is stored in a1

              if((a1 in test) == false)            // if the element a1 doesn't exist in the object test{}, which during the first iteration is always false          
              {
                  test[a1] = true;                 //objectname[key]=value;  the object test at position 'a1' is set to true hence during the next iteration it will be ignored 
                  let count =0;                    //initializing a count variable

                  for(let p=0; p < string1.length ; p++ )  //initializing inner loop
                  {
                      if(string1.charAt(p)=== a1)        //checks if a1 i.e the charecter at position 'i' of the given string ('str') has other occurences in the same string ('str')
                      {
                          count++;                       //if condition satisfied = count is incremented
                      }
                  }

                  obj[a1]=count;                         // objectname[key]=value; 
                  
              }
          
        }

        return obj;                                     //returns object to caller
}


module.exports = {
    firstName: "Siddhant", 
    lastName: "Barua", 
    studentId: "10439929",

   deepEquality,
   uniqueElements,
   countOfEachCharacterInString
};

/* References : 
1.Git Hub cd-546 lab 2 calculator example.
2.Stackoverflow
3.developer.mozilla.org
4.youtube.com

*/