function first()    {   //This function utilizes "GetElementByID" in its most basic form 
    var woah = "Woah, ";
    var IChanged = "I changed!";
    document.getElementById("paragraph").innerHTML = woah + IChanged;
}

function concatenation() {  //This function utilizes "GetElementByID" in conjunction with the += operator
    var concatenated = "You don't see it, but this sentence is ";
    concatenated += "concatenated";
    document.getElementById("concatenate").innerHTML = concatenated;
}