const lab2a = require("./geometry.js");
const lab2b = require("./utilities.js");

// geometry.js test statements

//volume of rectangular prism
console.log("The volume of rectangular prism");
console.log("-------------------------------");
try{
    console.log("The volume of rectangular prism is " + lab2a.volumeOfRectangularPrism(2,4,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The volume of rectangular prism is " + lab2a.volumeOfRectangularPrism(6,42,61));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The volume of rectangular prism is " + lab2a.volumeOfRectangularPrism(2,-4,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The volume of rectangular prism is " + lab2a.volumeOfRectangularPrism(2,0,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The volume of rectangular prism is " + lab2a.volumeOfRectangularPrism(100000,421,63));
   }
catch(err)
{
    console.log("Error has occured " + err);
}
console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");


//******************************************************************************************************************************************//#endregion */
//surface area of a rectangular prism

console.log("The surface area of rectangular prism");
console.log("-------------------------------------");
try{
    console.log("The surface area of rectangular prism is " + lab2a.surfaceAreaOfRectangularPrism(2,4,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of rectangular prism is " + lab2a.surfaceAreaOfRectangularPrism(-2,4,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of rectangular prism is " + lab2a.surfaceAreaOfRectangularPrism(2,4,-6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of rectangular prism is " + lab2a.surfaceAreaOfRectangularPrism(2,0,6));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of rectangular prism is " + lab2a.surfaceAreaOfRectangularPrism(12,4,55));
   }
catch(err)
{
    console.log("Error has occured " + err);
}
console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");


//*****************************************************************************************************************//#endregion */
//volume of sphere

console.log("The volume of sphere");
console.log("--------------------");

try{
    console.log("The volume of sphere is " + lab2a.volumeOfSphere(7));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The volume of sphere is " + lab2a.volumeOfSphere(8));
   }
catch(err)
{
    console.log("Error has occured " + err);
}


try{
    console.log("The volume of sphere is " + lab2a.volumeOfSphere("hello"));
   }
catch(err)
{
    console.log("Error has occured " + err);
}


try{
    console.log("The volume of sphere is " + lab2a.volumeOfSphere(0));
   }
catch(err)
{
    console.log("Error has occured " + err);
}


try{
    console.log("The volume of sphere is " + lab2a.volumeOfSphere(-17));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");

//*********************************************************************************************************************//#endregion */
// Surface area of a sphere

console.log("The surface area of sphere");
console.log("--------------------------");

try{
    console.log("The surface area of sphere is " + lab2a.surfaceAreaOfSphere(pokemon));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of sphere is " + lab2a.surfaceAreaOfSphere(1));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of sphere is " + lab2a.surfaceAreaOfSphere(3));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of sphere is " + lab2a.surfaceAreaOfSphere(-3));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

try{
    console.log("The surface area of sphere is " + lab2a.surfaceAreaOfSphere(0));
   }
catch(err)
{
    console.log("Error has occured " + err);
}

console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");

//****************************************************************************************************************************** */
//*********************************START UTILITIES****************************************************************************** */
//DEEP EQUALITY
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};

let a = {b:{p:21,q:22}, c:[6,7,8,9]};
let b = {c:[6,7,8,9] , b: {q:22, p:21}};

let a1 = {b:{p:21,q:22}, c:[6,7,8,9]};
let b1 = {c:[6,"hi",8,9] , b: {q:2, p:21}};

let l = {};
let m = "hello how are you??"



console.log("DEEP EQUALITY");
console.log("-------------");

try{
    console.log(lab2b.deepEquality(first,second));
}
catch(err)
{
    console.log("Error " + err);
}

try{
    console.log(lab2b.deepEquality(first,third));
}
catch(err)
{
    console.log("Error " + err);
}

try{
    console.log(lab2b.deepEquality(a,b));
}
catch(err)
{
    console.log("Error " + err);
}

try{
    console.log(lab2b.deepEquality(a1,b1));
}
catch(err)
{
    console.log("Error " + err);
}

try{
    console.log(lab2b.deepEquality(l,m));
}
catch(err)
{
    console.log("Error " + err);
}

console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");


//************************************************************************************************************************************* */
//  UNIQUE ELEMENTS

const testArr = ["a", "a", "b", "a", "b", "c"];
let testArr1 =["a","2","2","a","3","3"];
let testArr2 = [];
let testArr3 ="sup man ??";
let testArr4 =1234555544;



console.log("UNIQUE ELEMENTS IN AN ARRAY");
console.log("---------------------------");
try{
    console.log("The number of unique elements are " + lab2b.uniqueElements(testArr));
}
catch(err)
{
console.log("Error " + err); 
}

try{
    console.log("The number of unique elements are " + lab2b.uniqueElements(testArr1));
}
catch(err)
{
console.log("Error " + err); 
}

try{
    console.log("The number of unique elements are " + lab2b.uniqueElements(testArr2));
}
catch(err)
{
console.log("Error " + err); 
}

try{
    console.log("The number of unique elements are " + lab2b.uniqueElements(testArr3));
}
catch(err)
{
console.log("Error " + err); 
}

try{
    console.log("The number of unique elements are " + lab2b.uniqueElements(testArr4));
}
catch(err)
{
console.log("Error " + err); 
}


console.log("                                                                                                                  ");
console.log("------------------------------------------------------------------------------------------------------------------");


//************************************************************************************************************************************* */
//COUNT OF EACH CHARECTER IN STRING

console.log("COUNT OF EACH CHARECTER IN STRING");
console.log("---------------------------------");

const test = "Hello, the pie is in the oven";

const test2 ="Hi , my name is Siddhant Barua";

const test3 = [1,2,3,4,5];

let test4 ="";

try{
    const charMap = lab2b.countOfEachCharacterInString(test); 
    console.log(charMap);
}
catch(err)
{
console.log("Error " + err); 
}

try{
    const charMap = lab2b.countOfEachCharacterInString(test2); 
    console.log(charMap);
}
catch(err)
{
console.log("Error " + err); 
}

try{
    const charMap = lab2b.countOfEachCharacterInString(test3); 
    console.log(charMap);
}
catch(err)
{
console.log("Error " + err); 
}
try{
    const charMap = lab2b.countOfEachCharacterInString(test4); 
    console.log(charMap);
}
catch(err)
{
console.log("Error " + err); 
}


console.log("                                                                                                                  ");
console.log("---------------------------------------------END :)-----------------------------------------------------------------");

