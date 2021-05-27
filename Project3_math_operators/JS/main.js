function adding()  {    //adding function
    var result = 5 + 3;
    document.getElementById("math").innerHTML = "5 + 3 = " + result;
}

function subtracting()  {   //subtracting function
    var sub_result = 6 - 2;
    document.getElementById("math").innerHTML = "6 - 2 = " + sub_result;
}

function multiplication()   {   //multiplying function
    var mult_result = 4 * 6;
    document.getElementById("math").innerHTML = "4 * 6 = " + mult_result;
}

function division()   { //dividing function
    var div_result = 6 / 3;
    document.getElementById("math").innerHTML = "6 / 3 = " + div_result;
}

function multiple_math()    {   //complex math function
    answer = (2 * 2) - 5 / 3;
    document.getElementById("math").innerHTML = "(2 * 2) - 5 / 3 = " + answer;
}

function modulus_operator() {   //remainder function
    var answer = 21 % 4;
    document.getElementById("math").innerHTML = "The remainder when dividing 21 by 4 is: " + answer;
}

function unary_negation()   {   //unary function
    var x = 7;
    document.getElementById("math").innerHTML = "When applying the negation operator to 7, you get: " + -x;
}

function increment_decrement()  {   //incrementing/decfementing function
    var x = 8;
    document.getElementById("math").innerHTML = "If we incremented 8, we would recive: " + ++x + ". If we decremented 8 we would recieve: " + 7;
}

function math_object()  {   //utilizing a math object
    document.getElementById("math").innerHTML = "There is an seemingly endless number, known as PI. The 1st few numbers of PI are: " + Math.PI;
}

window.alert(Math.random() * 100);  //utilizing the "random" tool within JS