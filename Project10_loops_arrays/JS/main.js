//WHILE LOOP EXAMPLE
function call_loop()    {
    var number = "";
    var x = 1;
    
    while (x < 12)  {
        number += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = number

}

//STRING LENGTH EXAMPLE
function stLength() {
    x = "Click here to see the string length of this text.";
    y = x.length;

    document.getElementById("length").innerHTML = y;
}

// FOR LOOP EXAMPLE
var colors = ["blue", "green", "purple", "yellow"];
var content = "";
var y;

function ForLoop()  {
    for(y=0; y < colors.length; y++)    {
        content += colors[y] + "<br>";
        document.getElementById("forloop").innerHTML = content;
    }
}

//ARRAY FUNCTION EXAMPLE
function ArrayFunc()    {
    var CatPicture = [];

    CatPicture[1] = "happy";
    CatPicture[2] = "sad";
    CatPicture[3] = "angry";

    document.getElementById("arrayobject").innerHTML = "In this photo, the cat is " + CatPicture[3] + ".";
}

//CONSTANT KEYWORD EXAMPLE
function ConstantFunction()   {
    const musical_instrument = {type:"guitar", brand:"Fender", color:"black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "$750";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was " + musical_instrument.price;
}

//LET KEYWORD EXAMPLE
function LetExample()   {
    var X = 50;
    {
        let X = 35;
    }

document.getElementById("let").innerHTML = X;

} 

//RETURN STATEMENT EXAMPLE
function ReturnFunction()   {

function GetPI(){
   return Math.PI; 
}
document.getElementById("return").innerHTML = GetPI();
}

//OBJECT EXAMPLE
function ObjectFunction()   {
    let car = {
        make: "Volkswagon ",
        model: "Jetta ",
        year: "2017 ",
        color: "black ",
        description: function() {
            return "This car is a " + car.color + car.year + car.make + car.model;
        }
    }
    document.getElementById("object").innerHTML = car.description();
}

//BREAK EXAMPLE
function BreakFunction()    {
    var text = ""
    var x;

    for (x=0; x < 9; x++)   {
        if (x === 5) {break;}
        text += "the current number in this operation is: " + x + "<br>";
       
    }
    document.getElementById("break").innerHTML = text;
}