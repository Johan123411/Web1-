function SubmitForm()
{
    let phrase = document.getElementById("phrase").value; 

    
    if(phrase == "")
    {
        alert("please enter a text ");
    }
    else
    {
        let phrase1 =  phrase.toLowerCase();

        phrase1 = phrase1.replace(/[^\w]/g, '');

        let phrase2 = phrase1.split("").reverse().join("");

        let bool1 =  true;

        if(phrase1 == phrase2)
        {
            bool1 =  true;
        }
        else
        {
            bool1 = false;
        }

        let list  =  document.createElement("li");

        list.appendChild(document.createTextNode(phrase));  //https://stackoverflow.com/questions/41191445/using-createtextnode-but-i-need-to-add-html-tags-to-it-javascript-jquery

        list.setAttribute("class", bool1 ? "is-palindrome" : "not-palindrome");  //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

        let attempts = document.getElementById("attempts");

        attempts.appendChild(list);

    }


    return false;
} // logic from last weeks lab 
