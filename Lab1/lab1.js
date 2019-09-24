const questionOne = function questionOne(arr) 
{
    let sum = 0;
    for(let i=0; i < arr.length ; i++)   
        {
         sum  = sum + arr[i]*arr[i];
        }
     return sum; //changed from a console.log output statement to a return statement
     
}

const questionTwo = function questionTwo(num) 
{ 
    let sum;
    let temp1 = 0;
    let temp2 = 1
    if (num <= 0)
        {
            return 0;
        } 
    else
        {   
            for(let i = num ; i > 0; --i)
                {
                    sum = temp2;
                    temp2 = temp2 + temp1;
                    temp1 = sum;
                }
        return temp1;  //changed from a console.log output statement to a return statement
        }
    
}


const questionThree = function questionThree(text) 
{
    let count = 0;
    let string = text.toString();
    for(let i=0; i < string.length ; i++)
    {
        if(string.charAt(i) == "a" || string.charAt(i) =="A" || string.charAt(i) == "e" || string.charAt(i) =="E" || string.charAt(i) == "i" || string.charAt(i) =="I" || string.charAt(i) == "o" || string.charAt(i) =="O" || string.charAt(i) == "u" || string.charAt(i) =="U")
        {
            count = count + 1;

        }
    }

    return count;   //changed from a console.log output statement to a return statement

    
}

const questionFour = function questionFour(num) 
{
    let digit = num;
    let fact = 1 ;
    
    if (digit < 0)
        {
           return NaN;
            
        }
    else if(digit == 0)
        {
           return 1; 

        }   
    else
        {

        while(digit > 0)
            {
                fact = fact * digit;
                --digit;
            }
            return fact;    //changed from a console.log output statement to a return statement
        }
     
}


module.exports = {
    firstName: "Siddhant", 
    lastName: "Barua", 
    studentId: "10439929",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
   
};


