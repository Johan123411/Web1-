const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
 
  const variable = {
    "storyTitle": "The time i got lost in the Kakamega Forest ",
    "story": "This story is basically about how i got lost in the Kakamega Forest in Kenya. Kakamega Forest is a tropical rainforest situated in the Kakamega and Kisumu Counties of Kenya, northwest of the capital Nairobi, and near to the border with Uganda. \n The day started with a good hearty breakfast which would later proove to be the reason for me being stranded . Me along with my group went on a long hike through the kakameka forest and twas a fairly long trail. By the time we reached the apex of the hill, It was almost dark. The hearty breakfast i mentioned earlier lead to innevitable flatulance. Due to this i had to excuse myself and find a nice quiet tree to fertilize \n Little did i Know my group forgot about my absense and started heading back without me. I got done with what needed to be done and felt atleast 20 pounds lighter. But as i made my way back to where my group were supposed to be, I felt an additional 50 pounds on my chest. These drunk idiots were no where to be found and I just went into survival mode. Actually jk i mean i went into panic mode. \n Stranded not knowing what needs to be done, I finally figured out what needs to be done. It's 2017 and cellphones were a thing as far as i could  remember. I called the aforementioned idiots and said eyy you guys forget something?? and they immediately shit a brick. Rushed back to get me , apologised profusely and then needless to say, we've not spoken ever since.. \n ohh yeah by the way, I did get back to the base camp in one piece. (Fiction) "
  }; 

    res.json(variable);
 
});



module.exports = router; // exports the router 


// code template from the lab 6 lecture codes.