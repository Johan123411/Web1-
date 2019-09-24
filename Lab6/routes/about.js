const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
// not using any error checking because of limited or no cases where errors can occur. This is because we respond to the request with a static JSON object .
    const variable = {
        "name": "Siddhant Barua",
        "cwid": "10439929",
        "biography": "Hey!! I'm Siddhant J. Barua, I like listening to Heavy-Metal Music and playing video games. \n I also like watching UFC fights and going to Metal Concerts. Of course coding can be fun at times as well...", // "\n" does not show a new line in the browser, it just show's up as a "\n" why??  Tried using \r\n to no avail src : http://jsonlines.org/
        "favoriteShows": ["Spartacus", "Californication", "Breaking Bad ", "Better Call Saul"],
        "hobbies": ["Watching UFC Fights ", "Listening to Heavy Metal Music", "Playing Dota 2"]
      };

    res.json(variable); // respond with a json object containing the above inforimation.
    });



module.exports = router; // this is used export the router

// code template from the lab 6 lecture codes.