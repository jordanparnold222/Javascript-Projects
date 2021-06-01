//CONCAT METHOD EXAMPLE
function FullSentence() {

    var a = "This is ";
    var b = "a sentence ";
    var c = "that I ";
    var d = "have concatenated ";
    var e = "using the 'concat' method";
    var combined = a.concat(b, c, d, e );

    document.getElementById("concatenated").innerHTML = combined;
}

//SLICE METHOD EXAMPLE
function SliceMethod()  {

    var sentence = "There are only 5 fingers on one hand, but on the other hand... I actually don't know where i'm going with this.";
    var section = sentence.slice(63, 120);
    
    document.getElementById("sliced").innerHTML = section;
}

//toUpperCase METHOD EXAMPLE
function UpperCase()    {

    var x = "this sentence is entirely printed in uppercase characters";

    document.getElementById("upper").innerHTML = x.toUpperCase();
}

//SEARCH() METHOD EXAMPLE
function SearchMethod() {

    var y = "This is a string that will be searched";
    var z = y.search(" searched");

    document.getElementById("searching").innerHTML = z;
}

//NumToString METHOD EXAMPLE
function NumToString()  {

    var a = 409;
    var b = a.toString();
    document.getElementById("numbers_to_strings").innerHTML = a + " " + typeof b;
}

//TOPRECISION EXAMPLE
function ToDaPrecision() {

    var x = 1.09876543234567;

    document.getElementById("precision").innerHTML = x.toPrecision(5);
}

//TOFIXED EXAMPLE
function ToDaFixed()    {

    var x = 7.257890;
    var y = x.toFixed(3);

    document.getElementById("fixed").innerHTML = y;
}

//VALUEOF EXAMPLE
function ValOf()    {

    var x = "This is a string";
    var y = x.valueOf();

    document.getElementById("val").innerHTML = y;
}