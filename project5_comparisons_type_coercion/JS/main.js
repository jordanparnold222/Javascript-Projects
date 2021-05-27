document.write(typeof 7.5);
document.write("10" + 5);

function the_function()  {
    document.getElementById("test").innerHTML = 0/0;
}

function number_or_no() {
    document.getElementById("test").innerHTML = isNaN("Number");
}
function number_or_no2() {
    document.getElementById("test").innerHTML = isNaN("70");
}

function infinity() {
    document.getElementById("test").innerHTML = 2E700;
}

function NegInfinity()  {
    document.getElementById("test").innerHTML = -4E800
}

function ThisIsTrue()  {
document.getElementById("test").innerHTML = 10 > 7;
}

function ThisIsFalse()  {
    document.getElementById("test").innerHTML = 7 > 10;
}

console.log(7 * 8);

console.log(9 < 10);

function NotEqual() {
    document.getElementById("test").innerHTML = (10 + 16) == 15;
}

function Equal() {
    document.getElementById("test").innerHTML = (10 + 5) == 15;
}

function TriEq_True()   {
    X = "penguin";
    Y = "penguin";

    document.getElementById("test").innerHTML = X === Y;
}

function TriEq_False()   {
    X = "penguin";
    Y = "alpaca";

    document.getElementById("test").innerHTML = X === Y;
}

document.write(10>0 && 0<10);

document.write(10<0 && 0<20);

document.write(10<0 || 0<20);

document.write(10<0 || 0>20);

function not()  {
document.getElementById("test").innerHTML = !(20 == 19);
}

function NotFalse()  {
    document.getElementById("test").innerHTML = !(20 == 20);
    }