function first()    {
    var woah = "Woah, ";
    var IChanged = "I changed!";
    document.getElementById("paragraph").innerHTML = woah + IChanged;
}

function concatenation() {
    var concatenated = "You don't see it, but this sentence is ";
    concatenated += "concatenated";
    document.getElementById("concatenate").innerHTML = concatenated;
}