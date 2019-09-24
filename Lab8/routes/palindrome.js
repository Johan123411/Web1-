const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {

    if(!req.body["text-to-test"]) // checks if there is a text to test
    {
        res.render("palindrome/error",
    {desc : "Error 400: please enter a text!!"}); //if not then it shows an error
    }
    else
    {

    let vaar = req.body["text-to-test"];   //the main logic is to strip the string of all the white spaces and sprcial charecters then reversing the string then comparing with the original string..

    vaar =  vaar.replace(/[^\w]/g, '').toLowerCase(); //strips the text off of white spaces and  special charecters and also converts it into lower case

    let vaar2 = vaar.split("").reverse().join(""); //reverse the string  .split converts it into an array whereas .reverse reverses the array .join converts it back into a string  https://www.w3schools.com/jsref/jsref_split.asp   https://www.w3schools.com/jsref/jsref_join.asp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

    let bool = true;  //set a value boon to true initially

    if(vaar == vaar2)  //if the reversed string and the original string are equal then it's a palindrome
    {
        bool = true;  //sets boon value to true
    }
    else
    {
        bool = false;
    }

    res.render("palindrome/result", {palindrome_check : bool , text : req.body["text-to-test"]});  //respond with the check i.e if it's a palindrome or not and the text which is tested.
        
}});

module.exports = router;