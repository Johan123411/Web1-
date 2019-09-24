const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
 
    const variable = [
        {
          "schoolName": "PES Institute of Technology",
          "degree": "B.E",
          "favoriteClass": "Data Structures",
          "favoriteMemory": " A memorable memory would be when i jumped out of the class window (just a few meters higher than ground level) unseen but when a friend tried to follow, got caught and had to listen to an earfull from the principal. "
        },
        {
          "schoolName": "B.G.S.International reidential school",
          "degree": "12th grade",
          "favoriteClass": "Computer Lab",
          "favoriteMemory": "A memorable memory would be the C++ labs where we all played counter strike on lan "
        },
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "M.S",
          "favoriteClass": "Web-Programming",
          "favoriteMemory": " A few students cut the line to ask the professor their doubts resulting in me forgetting the question i had"
        }
              
        ];

    res.json(variable); //response of Json object variable can be done directly in this line as well. Using another variable to store the data is cleaner.
 
});



module.exports = router; // this is used to export the router.

// code template from the lab 6 lecture codes.