
//BEGIN GLOBAL VARIABLE EXAMPLE
var z = 7;

function adding_numbers1()   {
    document.write(15 + z + "<br>");

}

function adding_numbers2()  {
    document.write(z + 100 + "<br>");
}

adding_numbers1();
adding_numbers2();
//END GLOBAL VARIABLE EXAMPLE

//BEGIN LOCAL VARIABLE EXAMPLE
function adding_numbers3()  {
    var a = 20;
    document.write(a + 10 + "<br>");
}

function adding_numbers4()  {
    try{
    y = 17;
    document.write(a + y + "<br>");
    }
    catch (err){}
}

adding_numbers3();
adding_numbers4();
//END LOCAL VARIABLE EXAMPLE

//BEGIN IF-THEN STATEMENT EXAMPLES

if (1 < 2)  {
    document.write("1 is less than 2. Don't pretend you would have known that if I didn't tell you.");
}